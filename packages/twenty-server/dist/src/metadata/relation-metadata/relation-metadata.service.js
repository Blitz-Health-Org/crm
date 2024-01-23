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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationMetadataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_query_typeorm_1 = require("@ptc-org/nestjs-query-typeorm");
const typeorm_2 = require("typeorm");
const lodash_camelcase_1 = __importDefault(require("lodash.camelcase"));
const object_metadata_service_1 = require("../object-metadata/object-metadata.service");
const field_metadata_service_1 = require("../field-metadata/field-metadata.service");
const workspace_migration_runner_service_1 = require("../../workspace/workspace-migration-runner/workspace-migration-runner.service");
const workspace_migration_service_1 = require("../workspace-migration/workspace-migration.service");
const field_metadata_entity_1 = require("../field-metadata/field-metadata.entity");
const workspace_migration_entity_1 = require("../workspace-migration/workspace-migration.entity");
const create_custom_column_name_util_1 = require("../utils/create-custom-column-name.util");
const compute_object_target_table_util_1 = require("../../workspace/utils/compute-object-target-table.util");
const create_relation_foreign_key_column_name_util_1 = require("./utils/create-relation-foreign-key-column-name.util");
const relation_metadata_entity_1 = require("./relation-metadata.entity");
let RelationMetadataService = class RelationMetadataService extends nestjs_query_typeorm_1.TypeOrmQueryService {
    constructor(relationMetadataRepository, objectMetadataService, fieldMetadataService, workspaceMigrationService, workspaceMigrationRunnerService) {
        super(relationMetadataRepository);
        this.relationMetadataRepository = relationMetadataRepository;
        this.objectMetadataService = objectMetadataService;
        this.fieldMetadataService = fieldMetadataService;
        this.workspaceMigrationService = workspaceMigrationService;
        this.workspaceMigrationRunnerService = workspaceMigrationRunnerService;
    }
    async createOne(relationMetadataInput) {
        const objectMetadataMap = await this.getObjectMetadataMap(relationMetadataInput);
        await this.validateCreateRelationMetadataInput(relationMetadataInput, objectMetadataMap);
        const isCustom = true;
        const baseColumnName = `${(0, lodash_camelcase_1.default)(relationMetadataInput.toName)}Id`;
        const foreignKeyColumnName = (0, create_relation_foreign_key_column_name_util_1.createRelationForeignKeyColumnName)(relationMetadataInput.toName, isCustom);
        const createdFields = await this.fieldMetadataService.createMany([
            this.createFieldMetadataForRelationMetadata(relationMetadataInput, 'from', isCustom),
            this.createFieldMetadataForRelationMetadata(relationMetadataInput, 'to', isCustom),
            this.createForeignKeyFieldMetadata(relationMetadataInput, baseColumnName, foreignKeyColumnName),
        ]);
        const createdFieldMap = createdFields.reduce((acc, fieldMetadata) => {
            if (fieldMetadata.type === field_metadata_entity_1.FieldMetadataType.RELATION) {
                acc[fieldMetadata.name] = fieldMetadata;
            }
            return acc;
        }, {});
        const createdRelationMetadata = await super.createOne(Object.assign(Object.assign({}, relationMetadataInput), { fromFieldMetadataId: createdFieldMap[relationMetadataInput.fromName].id, toFieldMetadataId: createdFieldMap[relationMetadataInput.toName].id }));
        await this.createWorkspaceCustomMigration(relationMetadataInput, objectMetadataMap, foreignKeyColumnName);
        await this.workspaceMigrationRunnerService.executeMigrationFromPendingMigrations(relationMetadataInput.workspaceId);
        return createdRelationMetadata;
    }
    async validateCreateRelationMetadataInput(relationMetadataInput, objectMetadataMap) {
        if (relationMetadataInput.relationType === relation_metadata_entity_1.RelationMetadataType.MANY_TO_MANY) {
            throw new common_1.BadRequestException('Many to many relations are not supported yet');
        }
        if (objectMetadataMap[relationMetadataInput.fromObjectMetadataId] ===
            undefined ||
            objectMetadataMap[relationMetadataInput.toObjectMetadataId] === undefined) {
            throw new common_1.NotFoundException('Can\t find an existing object matching with fromObjectMetadataId or toObjectMetadataId');
        }
        await this.checkIfFieldMetadataRelationNameExists(relationMetadataInput, objectMetadataMap, 'from');
        await this.checkIfFieldMetadataRelationNameExists(relationMetadataInput, objectMetadataMap, 'to');
    }
    async checkIfFieldMetadataRelationNameExists(relationMetadataInput, objectMetadataMap, relationDirection) {
        const fieldAlreadyExists = await this.fieldMetadataService.findOneWithinWorkspace(relationMetadataInput.workspaceId, {
            where: {
                name: relationMetadataInput[`${relationDirection}Name`],
                objectMetadataId: relationMetadataInput[`${relationDirection}ObjectMetadataId`],
            },
        });
        if (fieldAlreadyExists) {
            throw new common_1.ConflictException(`Field on ${objectMetadataMap[relationMetadataInput[`${relationDirection}ObjectMetadataId`]].nameSingular} already exists`);
        }
    }
    async createWorkspaceCustomMigration(relationMetadataInput, objectMetadataMap, foreignKeyColumnName) {
        await this.workspaceMigrationService.createCustomMigration(relationMetadataInput.workspaceId, [
            {
                name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadataMap[relationMetadataInput.toObjectMetadataId]),
                action: 'alter',
                columns: [
                    {
                        action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.CREATE,
                        columnName: foreignKeyColumnName,
                        columnType: 'uuid',
                        isNullable: true,
                    },
                ],
            },
            {
                name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadataMap[relationMetadataInput.toObjectMetadataId]),
                action: 'alter',
                columns: [
                    {
                        action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.RELATION,
                        columnName: foreignKeyColumnName,
                        referencedTableName: (0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadataMap[relationMetadataInput.fromObjectMetadataId]),
                        referencedTableColumnName: 'id',
                        isUnique: relationMetadataInput.relationType ===
                            relation_metadata_entity_1.RelationMetadataType.ONE_TO_ONE,
                    },
                ],
            },
        ]);
    }
    createFieldMetadataForRelationMetadata(relationMetadataInput, relationDirection, isCustom) {
        return {
            name: relationMetadataInput[`${relationDirection}Name`],
            label: relationMetadataInput[`${relationDirection}Label`],
            description: relationMetadataInput[`${relationDirection}Description`],
            icon: relationMetadataInput[`${relationDirection}Icon`],
            isCustom: true,
            targetColumnMap: relationDirection === 'to'
                ? isCustom
                    ? (0, create_custom_column_name_util_1.createCustomColumnName)(relationMetadataInput.toName)
                    : relationMetadataInput.toName
                : {},
            isActive: true,
            isNullable: true,
            type: field_metadata_entity_1.FieldMetadataType.RELATION,
            objectMetadataId: relationMetadataInput[`${relationDirection}ObjectMetadataId`],
            workspaceId: relationMetadataInput.workspaceId,
        };
    }
    createForeignKeyFieldMetadata(relationMetadataInput, baseColumnName, foreignKeyColumnName) {
        return {
            name: baseColumnName,
            label: `${relationMetadataInput.toLabel} Foreign Key`,
            description: relationMetadataInput.toDescription
                ? `${relationMetadataInput.toDescription} Foreign Key`
                : undefined,
            icon: undefined,
            isCustom: true,
            targetColumnMap: { value: foreignKeyColumnName },
            isActive: true,
            isNullable: true,
            isSystem: true,
            type: field_metadata_entity_1.FieldMetadataType.UUID,
            objectMetadataId: relationMetadataInput.toObjectMetadataId,
            workspaceId: relationMetadataInput.workspaceId,
        };
    }
    async getObjectMetadataMap(relationMetadataInput) {
        const objectMetadataEntries = await this.objectMetadataService.findManyWithinWorkspace(relationMetadataInput.workspaceId, {
            where: {
                id: (0, typeorm_2.In)([
                    relationMetadataInput.fromObjectMetadataId,
                    relationMetadataInput.toObjectMetadataId,
                ]),
            },
        });
        return objectMetadataEntries.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }
    async findOneWithinWorkspace(workspaceId, options) {
        return this.relationMetadataRepository.findOne(Object.assign(Object.assign({}, options), { where: Object.assign(Object.assign({}, options.where), { workspaceId }), relations: ['fromFieldMetadata', 'toFieldMetadata'] }));
    }
    async deleteOne(id) {
        const relationMetadata = await this.relationMetadataRepository.findOne({
            where: { id },
            relations: ['fromFieldMetadata', 'toFieldMetadata'],
        });
        if (!relationMetadata) {
            throw new common_1.NotFoundException('Relation does not exist');
        }
        const deletedRelationMetadata = super.deleteOne(id);
        this.fieldMetadataService.deleteMany({
            id: {
                in: [
                    relationMetadata.fromFieldMetadataId,
                    relationMetadata.toFieldMetadataId,
                ],
            },
        });
        return deletedRelationMetadata;
    }
};
exports.RelationMetadataService = RelationMetadataService;
exports.RelationMetadataService = RelationMetadataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(relation_metadata_entity_1.RelationMetadataEntity, 'metadata')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        object_metadata_service_1.ObjectMetadataService,
        field_metadata_service_1.FieldMetadataService,
        workspace_migration_service_1.WorkspaceMigrationService,
        workspace_migration_runner_service_1.WorkspaceMigrationRunnerService])
], RelationMetadataService);
//# sourceMappingURL=relation-metadata.service.js.map