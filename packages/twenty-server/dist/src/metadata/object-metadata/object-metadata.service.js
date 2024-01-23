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
exports.ObjectMetadataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_query_typeorm_1 = require("@ptc-org/nestjs-query-typeorm");
const workspace_migration_service_1 = require("../workspace-migration/workspace-migration.service");
const workspace_migration_runner_service_1 = require("../../workspace/workspace-migration-runner/workspace-migration-runner.service");
const workspace_migration_entity_1 = require("../workspace-migration/workspace-migration.entity");
const field_metadata_entity_1 = require("../field-metadata/field-metadata.entity");
const typeorm_service_1 = require("../../database/typeorm/typeorm.service");
const data_source_service_1 = require("../data-source/data-source.service");
const relation_metadata_entity_1 = require("../relation-metadata/relation-metadata.entity");
const compute_object_target_table_util_1 = require("../../workspace/utils/compute-object-target-table.util");
const object_metadata_entity_1 = require("./object-metadata.entity");
let ObjectMetadataService = class ObjectMetadataService extends nestjs_query_typeorm_1.TypeOrmQueryService {
    constructor(objectMetadataRepository, fieldMetadataRepository, relationMetadataRepository, dataSourceService, typeORMService, workspaceMigrationService, workspaceMigrationRunnerService) {
        super(objectMetadataRepository);
        this.objectMetadataRepository = objectMetadataRepository;
        this.fieldMetadataRepository = fieldMetadataRepository;
        this.relationMetadataRepository = relationMetadataRepository;
        this.dataSourceService = dataSourceService;
        this.typeORMService = typeORMService;
        this.workspaceMigrationService = workspaceMigrationService;
        this.workspaceMigrationRunnerService = workspaceMigrationRunnerService;
    }
    async query(query, opts) {
        const start = performance.now();
        const result = super.query(query, opts);
        const end = performance.now();
        console.log(`metadata query time: ${end - start} ms`);
        return result;
    }
    async createOne(objectMetadataInput) {
        const lastDataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(objectMetadataInput.workspaceId);
        if (objectMetadataInput.nameSingular.toLowerCase() ===
            objectMetadataInput.namePlural.toLowerCase()) {
            throw new common_1.BadRequestException('The singular and plural name cannot be the same for an object');
        }
        const createdObjectMetadata = await super.createOne(Object.assign(Object.assign({}, objectMetadataInput), { dataSourceId: lastDataSourceMetadata.id, targetTableName: 'DEPRECATED', isActive: true, isCustom: true, isSystem: false, fields: [
                {
                    type: field_metadata_entity_1.FieldMetadataType.UUID,
                    name: 'id',
                    label: 'Id',
                    targetColumnMap: {
                        value: 'id',
                    },
                    icon: 'Icon123',
                    description: 'Id',
                    isNullable: false,
                    isActive: true,
                    isCustom: false,
                    isSystem: true,
                    workspaceId: objectMetadataInput.workspaceId,
                    defaultValue: { type: 'uuid' },
                },
                {
                    type: field_metadata_entity_1.FieldMetadataType.TEXT,
                    name: 'name',
                    label: 'Name',
                    targetColumnMap: {
                        value: 'name',
                    },
                    icon: 'IconAbc',
                    description: 'Name',
                    isNullable: false,
                    isActive: true,
                    isCustom: false,
                    workspaceId: objectMetadataInput.workspaceId,
                    defaultValue: { value: 'Untitled' },
                },
                {
                    type: field_metadata_entity_1.FieldMetadataType.DATE_TIME,
                    name: 'createdAt',
                    label: 'Creation date',
                    targetColumnMap: {
                        value: 'createdAt',
                    },
                    icon: 'IconCalendar',
                    description: 'Creation date',
                    isNullable: false,
                    isActive: true,
                    isCustom: false,
                    workspaceId: objectMetadataInput.workspaceId,
                    defaultValue: { type: 'now' },
                },
                {
                    type: field_metadata_entity_1.FieldMetadataType.DATE_TIME,
                    name: 'updatedAt',
                    label: 'Update date',
                    targetColumnMap: {
                        value: 'updatedAt',
                    },
                    icon: 'IconCalendar',
                    description: 'Update date',
                    isNullable: false,
                    isActive: true,
                    isCustom: false,
                    isSystem: true,
                    workspaceId: objectMetadataInput.workspaceId,
                    defaultValue: { type: 'now' },
                },
            ] }));
        const { activityTargetObjectMetadata } = await this.createActivityTargetRelation(objectMetadataInput.workspaceId, createdObjectMetadata);
        const { favoriteObjectMetadata } = await this.createFavoriteRelation(objectMetadataInput.workspaceId, createdObjectMetadata);
        await this.workspaceMigrationService.createCustomMigration(createdObjectMetadata.workspaceId, [
            {
                name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(createdObjectMetadata),
                action: 'create',
            },
            {
                name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(activityTargetObjectMetadata),
                action: 'alter',
                columns: [
                    {
                        action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.CREATE,
                        columnName: `${(0, compute_object_target_table_util_1.computeObjectTargetTable)(createdObjectMetadata)}Id`,
                        columnType: 'uuid',
                        isNullable: true,
                    },
                ],
            },
            {
                name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(activityTargetObjectMetadata),
                action: 'alter',
                columns: [
                    {
                        action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.RELATION,
                        columnName: `${(0, compute_object_target_table_util_1.computeObjectTargetTable)(createdObjectMetadata)}Id`,
                        referencedTableName: (0, compute_object_target_table_util_1.computeObjectTargetTable)(createdObjectMetadata),
                        referencedTableColumnName: 'id',
                    },
                ],
            },
            {
                name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(favoriteObjectMetadata),
                action: 'alter',
                columns: [
                    {
                        action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.CREATE,
                        columnName: `${(0, compute_object_target_table_util_1.computeObjectTargetTable)(createdObjectMetadata)}Id`,
                        columnType: 'uuid',
                        isNullable: true,
                    },
                ],
            },
            {
                name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(favoriteObjectMetadata),
                action: 'alter',
                columns: [
                    {
                        action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.RELATION,
                        columnName: `${(0, compute_object_target_table_util_1.computeObjectTargetTable)(createdObjectMetadata)}Id`,
                        referencedTableName: (0, compute_object_target_table_util_1.computeObjectTargetTable)(createdObjectMetadata),
                        referencedTableColumnName: 'id',
                    },
                ],
            },
            {
                name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(createdObjectMetadata),
                action: 'alter',
                columns: [
                    {
                        action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.CREATE,
                        columnName: 'name',
                        columnType: 'text',
                        defaultValue: "'Untitled'",
                    },
                ],
            },
        ]);
        await this.workspaceMigrationRunnerService.executeMigrationFromPendingMigrations(createdObjectMetadata.workspaceId);
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(createdObjectMetadata.workspaceId);
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSourceMetadata);
        const view = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`INSERT INTO ${dataSourceMetadata.schema}."view"
      ("objectMetadataId", "type", "name")
      VALUES ('${createdObjectMetadata.id}', 'table', 'All ${createdObjectMetadata.namePlural}') RETURNING *`));
        createdObjectMetadata.fields.map(async (field, index) => {
            if (field.name === 'id') {
                return;
            }
            await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`INSERT INTO ${dataSourceMetadata.schema}."viewField"
      ("fieldMetadataId", "position", "isVisible", "size", "viewId")
      VALUES ('${field.id}', '${index - 1}', true, 180, '${view[0].id}') RETURNING *`));
        });
        return createdObjectMetadata;
    }
    async findOneWithinWorkspace(workspaceId, options) {
        return this.objectMetadataRepository.findOne(Object.assign(Object.assign({ relations: [
                'fields',
                'fields.fromRelationMetadata',
                'fields.toRelationMetadata',
            ] }, options), { where: Object.assign(Object.assign({}, options.where), { workspaceId }) }));
    }
    async findOneOrFailWithinWorkspace(workspaceId, options) {
        return this.objectMetadataRepository.findOneOrFail(Object.assign(Object.assign({ relations: [
                'fields',
                'fields.fromRelationMetadata',
                'fields.toRelationMetadata',
            ] }, options), { where: Object.assign(Object.assign({}, options.where), { workspaceId }) }));
    }
    async findManyWithinWorkspace(workspaceId, options) {
        return this.objectMetadataRepository.find(Object.assign(Object.assign({ relations: [
                'fields.object',
                'fields',
                'fields.fromRelationMetadata',
                'fields.toRelationMetadata',
                'fields.fromRelationMetadata.toObjectMetadata',
            ] }, options), { where: Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.where), { workspaceId }) }));
    }
    async findMany(options) {
        return this.objectMetadataRepository.find(Object.assign(Object.assign({ relations: [
                'fields',
                'fields.fromRelationMetadata',
                'fields.toRelationMetadata',
                'fields.fromRelationMetadata.toObjectMetadata',
            ] }, options), { where: Object.assign({}, options === null || options === void 0 ? void 0 : options.where) }));
    }
    async deleteObjectsMetadata(workspaceId) {
        await this.objectMetadataRepository.delete({ workspaceId });
    }
    async createActivityTargetRelation(workspaceId, createdObjectMetadata) {
        const activityTargetObjectMetadata = await this.objectMetadataRepository.findOneByOrFail({
            nameSingular: 'activityTarget',
            workspaceId: workspaceId,
        });
        const activityTargetRelationFieldMetadata = await this.fieldMetadataRepository.save([
            {
                objectMetadataId: createdObjectMetadata.id,
                workspaceId: workspaceId,
                isCustom: true,
                isActive: true,
                type: field_metadata_entity_1.FieldMetadataType.RELATION,
                name: 'activityTargets',
                label: 'Activities',
                targetColumnMap: {},
                description: `Activities tied to the ${createdObjectMetadata.labelSingular}`,
                icon: 'IconCheckbox',
                isNullable: true,
            },
            {
                objectMetadataId: activityTargetObjectMetadata.id,
                workspaceId: workspaceId,
                isCustom: true,
                isActive: true,
                type: field_metadata_entity_1.FieldMetadataType.RELATION,
                name: createdObjectMetadata.nameSingular,
                label: createdObjectMetadata.labelSingular,
                targetColumnMap: {},
                description: `ActivityTarget ${createdObjectMetadata.labelSingular}`,
                icon: 'IconBuildingSkyscraper',
                isNullable: true,
            },
            {
                objectMetadataId: activityTargetObjectMetadata.id,
                workspaceId: workspaceId,
                isCustom: true,
                isActive: true,
                type: field_metadata_entity_1.FieldMetadataType.UUID,
                name: `${createdObjectMetadata.nameSingular}Id`,
                label: `${createdObjectMetadata.labelSingular} ID (foreign key)`,
                targetColumnMap: {
                    value: `${(0, compute_object_target_table_util_1.computeObjectTargetTable)(createdObjectMetadata)}Id`,
                },
                description: `ActivityTarget ${createdObjectMetadata.labelSingular} id foreign key`,
                icon: undefined,
                isNullable: true,
                isSystem: true,
                defaultValue: undefined,
            },
        ]);
        const activityTargetRelationFieldMetadataMap = activityTargetRelationFieldMetadata.reduce((acc, fieldMetadata) => {
            if (fieldMetadata.type === field_metadata_entity_1.FieldMetadataType.RELATION) {
                acc[fieldMetadata.objectMetadataId] = fieldMetadata;
            }
            return acc;
        }, {});
        await this.relationMetadataRepository.save([
            {
                workspaceId: workspaceId,
                relationType: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
                fromObjectMetadataId: createdObjectMetadata.id,
                toObjectMetadataId: activityTargetObjectMetadata.id,
                fromFieldMetadataId: activityTargetRelationFieldMetadataMap[createdObjectMetadata.id].id,
                toFieldMetadataId: activityTargetRelationFieldMetadataMap[activityTargetObjectMetadata.id].id,
            },
        ]);
        return { activityTargetObjectMetadata };
    }
    async createFavoriteRelation(workspaceId, createdObjectMetadata) {
        const favoriteObjectMetadata = await this.objectMetadataRepository.findOneByOrFail({
            nameSingular: 'favorite',
            workspaceId: workspaceId,
        });
        const favoriteRelationFieldMetadata = await this.fieldMetadataRepository.save([
            {
                objectMetadataId: createdObjectMetadata.id,
                workspaceId: workspaceId,
                isCustom: true,
                isActive: true,
                type: field_metadata_entity_1.FieldMetadataType.RELATION,
                name: 'favorites',
                label: 'Favorites',
                targetColumnMap: {},
                description: `Favorites tied to the ${createdObjectMetadata.labelSingular}`,
                icon: 'IconHeart',
                isNullable: true,
            },
            {
                objectMetadataId: favoriteObjectMetadata.id,
                workspaceId: workspaceId,
                isCustom: true,
                isActive: true,
                type: field_metadata_entity_1.FieldMetadataType.RELATION,
                name: createdObjectMetadata.nameSingular,
                label: createdObjectMetadata.labelSingular,
                targetColumnMap: {},
                description: `Favorite ${createdObjectMetadata.labelSingular}`,
                icon: 'IconBuildingSkyscraper',
                isNullable: true,
            },
            {
                objectMetadataId: favoriteObjectMetadata.id,
                workspaceId: workspaceId,
                isCustom: true,
                isActive: true,
                type: field_metadata_entity_1.FieldMetadataType.UUID,
                name: `${createdObjectMetadata.nameSingular}Id`,
                label: `${createdObjectMetadata.labelSingular} ID (foreign key)`,
                targetColumnMap: {
                    value: `${(0, compute_object_target_table_util_1.computeObjectTargetTable)(createdObjectMetadata)}Id`,
                },
                description: `Favorite ${createdObjectMetadata.labelSingular} id foreign key`,
                icon: undefined,
                isNullable: true,
                isSystem: true,
                defaultValue: undefined,
            },
        ]);
        const favoriteRelationFieldMetadataMap = favoriteRelationFieldMetadata.reduce((acc, fieldMetadata) => {
            if (fieldMetadata.type === field_metadata_entity_1.FieldMetadataType.RELATION) {
                acc[fieldMetadata.objectMetadataId] = fieldMetadata;
            }
            return acc;
        }, {});
        await this.relationMetadataRepository.save([
            {
                workspaceId: workspaceId,
                relationType: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
                fromObjectMetadataId: createdObjectMetadata.id,
                toObjectMetadataId: favoriteObjectMetadata.id,
                fromFieldMetadataId: favoriteRelationFieldMetadataMap[createdObjectMetadata.id].id,
                toFieldMetadataId: favoriteRelationFieldMetadataMap[favoriteObjectMetadata.id].id,
            },
        ]);
        return { favoriteObjectMetadata };
    }
};
exports.ObjectMetadataService = ObjectMetadataService;
exports.ObjectMetadataService = ObjectMetadataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(object_metadata_entity_1.ObjectMetadataEntity, 'metadata')),
    __param(1, (0, typeorm_1.InjectRepository)(field_metadata_entity_1.FieldMetadataEntity, 'metadata')),
    __param(2, (0, typeorm_1.InjectRepository)(relation_metadata_entity_1.RelationMetadataEntity, 'metadata')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        data_source_service_1.DataSourceService,
        typeorm_service_1.TypeORMService,
        workspace_migration_service_1.WorkspaceMigrationService,
        workspace_migration_runner_service_1.WorkspaceMigrationRunnerService])
], ObjectMetadataService);
//# sourceMappingURL=object-metadata.service.js.map