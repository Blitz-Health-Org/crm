"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMetadataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const uuid_1 = require("uuid");
const typeorm_2 = require("typeorm");
const nestjs_query_typeorm_1 = require("@ptc-org/nestjs-query-typeorm");
const workspace_migration_runner_service_1 = require("../../workspace/workspace-migration-runner/workspace-migration-runner.service");
const workspace_migration_service_1 = require("../workspace-migration/workspace-migration.service");
const object_metadata_service_1 = require("../object-metadata/object-metadata.service");
const workspace_migration_entity_1 = require("../workspace-migration/workspace-migration.entity");
const generate_target_column_map_util_1 = require("./utils/generate-target-column-map.util");
const typeorm_service_1 = require("../../database/typeorm/typeorm.service");
const data_source_service_1 = require("../data-source/data-source.service");
const workspace_migration_factory_1 = require("../workspace-migration/workspace-migration.factory");
const compute_object_target_table_util_1 = require("../../workspace/utils/compute-object-target-table.util");
const field_metadata_entity_1 = require("./field-metadata.entity");
let FieldMetadataService = class FieldMetadataService extends nestjs_query_typeorm_1.TypeOrmQueryService {
    constructor(fieldMetadataRepository, objectMetadataService, workspaceMigrationFactory, workspaceMigrationService, workspaceMigrationRunnerService, dataSourceService, typeORMService) {
        super(fieldMetadataRepository);
        this.fieldMetadataRepository = fieldMetadataRepository;
        this.objectMetadataService = objectMetadataService;
        this.workspaceMigrationFactory = workspaceMigrationFactory;
        this.workspaceMigrationService = workspaceMigrationService;
        this.workspaceMigrationRunnerService = workspaceMigrationRunnerService;
        this.dataSourceService = dataSourceService;
        this.typeORMService = typeORMService;
    }
    async createOne(fieldMetadataInput) {
        const objectMetadata = await this.objectMetadataService.findOneWithinWorkspace(fieldMetadataInput.workspaceId, {
            where: {
                id: fieldMetadataInput.objectMetadataId,
            },
        });
        if (!objectMetadata) {
            throw new common_1.NotFoundException('Object does not exist');
        }
        const fieldAlreadyExists = await this.fieldMetadataRepository.findOne({
            where: {
                name: fieldMetadataInput.name,
                objectMetadataId: fieldMetadataInput.objectMetadataId,
                workspaceId: fieldMetadataInput.workspaceId,
            },
        });
        if (fieldAlreadyExists) {
            throw new common_1.ConflictException('Field already exists');
        }
        const createdFieldMetadata = await super.createOne(Object.assign(Object.assign({}, fieldMetadataInput), { targetColumnMap: (0, generate_target_column_map_util_1.generateTargetColumnMap)(fieldMetadataInput.type, true, fieldMetadataInput.name), options: fieldMetadataInput.options
                ? fieldMetadataInput.options.map((option) => (Object.assign(Object.assign({}, option), { id: (0, uuid_1.v4)() })))
                : undefined, isActive: true, isCustom: true }));
        await this.workspaceMigrationService.createCustomMigration(fieldMetadataInput.workspaceId, [
            {
                name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadata),
                action: 'alter',
                columns: this.workspaceMigrationFactory.createColumnActions(workspace_migration_entity_1.WorkspaceMigrationColumnActionType.CREATE, createdFieldMetadata),
            },
        ]);
        await this.workspaceMigrationRunnerService.executeMigrationFromPendingMigrations(fieldMetadataInput.workspaceId);
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(fieldMetadataInput.workspaceId);
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSourceMetadata);
        const view = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT id FROM ${dataSourceMetadata.schema}."view"
      WHERE "objectMetadataId" = '${createdFieldMetadata.objectMetadataId}'`));
        const existingViewFields = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT * FROM ${dataSourceMetadata.schema}."viewField"
      WHERE "viewId" = '${view[0].id}'`));
        const lastPosition = existingViewFields
            .map((viewField) => viewField.position)
            .reduce((acc, position) => {
            if (position > acc) {
                return position;
            }
            return acc;
        }, -1);
        await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`INSERT INTO ${dataSourceMetadata.schema}."viewField"
    ("fieldMetadataId", "position", "isVisible", "size", "viewId")
    VALUES ('${createdFieldMetadata.id}', '${lastPosition + 1}', true, 180, '${view[0].id}')`));
        return createdFieldMetadata;
    }
    async updateOne(id, fieldMetadataInput) {
        const existingFieldMetadata = await this.fieldMetadataRepository.findOne({
            where: {
                id,
                workspaceId: fieldMetadataInput.workspaceId,
            },
        });
        if (!existingFieldMetadata) {
            throw new common_1.NotFoundException('Field does not exist');
        }
        if (existingFieldMetadata.isCustom === false) {
            fieldMetadataInput = {
                id: fieldMetadataInput.id,
                isActive: fieldMetadataInput.isActive,
                workspaceId: fieldMetadataInput.workspaceId,
            };
        }
        const objectMetadata = await this.objectMetadataService.findOneWithinWorkspace(fieldMetadataInput.workspaceId, {
            where: {
                id: existingFieldMetadata === null || existingFieldMetadata === void 0 ? void 0 : existingFieldMetadata.objectMetadataId,
            },
        });
        if (!objectMetadata) {
            throw new common_1.NotFoundException('Object does not exist');
        }
        if (objectMetadata.labelIdentifierFieldMetadataId ===
            existingFieldMetadata.id &&
            fieldMetadataInput.isActive === false) {
            throw new common_1.BadRequestException('Cannot deactivate label identifier field');
        }
        if (fieldMetadataInput.options) {
            for (const option of fieldMetadataInput.options) {
                if (!option.id) {
                    throw new common_1.BadRequestException('Option id is required');
                }
            }
        }
        const updatedFieldMetadata = await super.updateOne(id, fieldMetadataInput);
        if (fieldMetadataInput.options || fieldMetadataInput.defaultValue) {
            await this.workspaceMigrationService.createCustomMigration(existingFieldMetadata.workspaceId, [
                {
                    name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadata),
                    action: 'alter',
                    columns: this.workspaceMigrationFactory.createColumnActions(workspace_migration_entity_1.WorkspaceMigrationColumnActionType.ALTER, existingFieldMetadata, updatedFieldMetadata),
                },
            ]);
            await this.workspaceMigrationRunnerService.executeMigrationFromPendingMigrations(updatedFieldMetadata.workspaceId);
        }
        return updatedFieldMetadata;
    }
    async findOneOrFail(id, options) {
        const fieldMetadata = await this.fieldMetadataRepository.findOne(Object.assign(Object.assign({}, options), { where: Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.where), { id }) }));
        if (!fieldMetadata) {
            throw new common_1.NotFoundException('Field does not exist');
        }
        return fieldMetadata;
    }
    async findOneWithinWorkspace(workspaceId, options) {
        return this.fieldMetadataRepository.findOne(Object.assign(Object.assign({}, options), { where: Object.assign(Object.assign({}, options.where), { workspaceId }) }));
    }
    async deleteFieldsMetadata(workspaceId) {
        await this.fieldMetadataRepository.delete({ workspaceId });
    }
};
exports.FieldMetadataService = FieldMetadataService;
exports.FieldMetadataService = FieldMetadataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(field_metadata_entity_1.FieldMetadataEntity, 'metadata')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        object_metadata_service_1.ObjectMetadataService,
        workspace_migration_factory_1.WorkspaceMigrationFactory,
        workspace_migration_service_1.WorkspaceMigrationService,
        workspace_migration_runner_service_1.WorkspaceMigrationRunnerService,
        data_source_service_1.DataSourceService,
        typeorm_service_1.TypeORMService])
], FieldMetadataService);
//# sourceMappingURL=field-metadata.service.js.map