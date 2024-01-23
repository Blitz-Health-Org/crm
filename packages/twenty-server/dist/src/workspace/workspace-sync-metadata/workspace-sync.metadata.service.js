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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceSyncMetadataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const microdiff_1 = __importDefault(require("microdiff"));
const typeorm_2 = require("typeorm");
const lodash_camelcase_1 = __importDefault(require("lodash.camelcase"));
const uuid_1 = require("uuid");
const field_metadata_entity_1 = require("../../metadata/field-metadata/field-metadata.entity");
const object_metadata_entity_1 = require("../../metadata/object-metadata/object-metadata.entity");
const relation_metadata_entity_1 = require("../../metadata/relation-metadata/relation-metadata.entity");
const sync_metadata_util_1 = require("./utils/sync-metadata.util");
const standard_objects_1 = require("./standard-objects");
const workspace_migration_entity_1 = require("../../metadata/workspace-migration/workspace-migration.entity");
const workspace_migration_factory_1 = require("../../metadata/workspace-migration/workspace-migration.factory");
const workspace_migration_runner_service_1 = require("../workspace-migration-runner/workspace-migration-runner.service");
const reflective_metadata_factory_1 = require("./reflective-metadata.factory");
const feature_flag_entity_1 = require("../../core/feature-flag/feature-flag.entity");
const compute_object_target_table_util_1 = require("../utils/compute-object-target-table.util");
let WorkspaceSyncMetadataService = class WorkspaceSyncMetadataService {
    constructor(workspaceMigrationFactory, workspaceMigrationRunnerService, reflectiveMetadataFactory, objectMetadataRepository, fieldMetadataRepository, relationMetadataRepository, workspaceMigrationRepository, featureFlagRepository) {
        this.workspaceMigrationFactory = workspaceMigrationFactory;
        this.workspaceMigrationRunnerService = workspaceMigrationRunnerService;
        this.reflectiveMetadataFactory = reflectiveMetadataFactory;
        this.objectMetadataRepository = objectMetadataRepository;
        this.fieldMetadataRepository = fieldMetadataRepository;
        this.relationMetadataRepository = relationMetadataRepository;
        this.workspaceMigrationRepository = workspaceMigrationRepository;
        this.featureFlagRepository = featureFlagRepository;
    }
    async syncStandardObjectsAndFieldsMetadata(dataSourceId, workspaceId) {
        try {
            const workspaceFeatureFlags = await this.featureFlagRepository.find({
                where: { workspaceId },
            });
            const workspaceFeatureFlagsMap = workspaceFeatureFlags.reduce((result, currentFeatureFlag) => {
                result[currentFeatureFlag.key] = currentFeatureFlag.value;
                return result;
            }, {});
            const standardObjects = await this.reflectiveMetadataFactory.createObjectMetadataCollection(standard_objects_1.standardObjectMetadata, workspaceId, dataSourceId, workspaceFeatureFlagsMap);
            const objectsInDB = await this.objectMetadataRepository.find({
                where: { workspaceId, isCustom: false },
                relations: ['dataSource', 'fields'],
            });
            const objectsInDBByName = (0, sync_metadata_util_1.mapObjectMetadataByUniqueIdentifier)(objectsInDB);
            const standardObjectsByName = (0, sync_metadata_util_1.mapObjectMetadataByUniqueIdentifier)(standardObjects);
            const objectsToCreate = [];
            const objectsToDelete = objectsInDB.filter((objectInDB) => !standardObjectsByName[objectInDB.nameSingular]);
            const objectsToUpdate = {};
            const fieldsToCreate = [];
            const fieldsToDelete = [];
            const fieldsToUpdate = {};
            for (const standardObjectName in standardObjectsByName) {
                const standardObject = standardObjectsByName[standardObjectName];
                const objectInDB = objectsInDBByName[standardObjectName];
                if (!objectInDB) {
                    objectsToCreate.push(standardObject);
                    continue;
                }
                const { fields: objectInDBFields } = objectInDB, objectInDBWithoutFields = __rest(objectInDB, ["fields"]);
                const { fields: standardObjectFields } = standardObject, standardObjectWithoutFields = __rest(standardObject, ["fields"]);
                const objectPropertiesToIgnore = [
                    'id',
                    'createdAt',
                    'updatedAt',
                    'labelIdentifierFieldMetadataId',
                    'imageIdentifierFieldMetadataId',
                    'isActive',
                ];
                const objectDiffWithoutIgnoredProperties = (0, sync_metadata_util_1.filterIgnoredProperties)(objectInDBWithoutFields, objectPropertiesToIgnore);
                const fieldPropertiesToIgnore = [
                    'id',
                    'createdAt',
                    'updatedAt',
                    'objectMetadataId',
                    'isActive',
                ];
                const objectInDBFieldsWithoutDefaultFields = Object.fromEntries(Object.entries(objectInDBFields).map(([key, value]) => {
                    if (value === null || typeof value !== 'object') {
                        return [key, value];
                    }
                    return [
                        key,
                        (0, sync_metadata_util_1.filterIgnoredProperties)(value, fieldPropertiesToIgnore, (property) => {
                            if (property !== null && typeof property === 'object') {
                                return JSON.stringify(property);
                            }
                            return property;
                        }),
                    ];
                }));
                const objectDiff = (0, microdiff_1.default)(objectDiffWithoutIgnoredProperties, standardObjectWithoutFields);
                const fieldsDiff = (0, microdiff_1.default)(objectInDBFieldsWithoutDefaultFields, standardObjectFields);
                for (const diff of objectDiff) {
                    if (diff.type === 'CHANGE') {
                        const property = diff.path[0];
                        objectsToUpdate[objectInDB.id] = Object.assign(Object.assign({}, objectsToUpdate[objectInDB.id]), { [property]: diff.value });
                    }
                }
                for (const diff of fieldsDiff) {
                    const fieldName = diff.path[0];
                    if (diff.type === 'CREATE') {
                        fieldsToCreate.push(Object.assign(Object.assign({}, standardObjectFields[fieldName]), { objectMetadataId: objectInDB.id }));
                    }
                    if (diff.type === 'REMOVE' && diff.path.length === 1) {
                        fieldsToDelete.push(objectInDBFields[fieldName]);
                    }
                    if (diff.type === 'CHANGE') {
                        const property = diff.path[diff.path.length - 1];
                        fieldsToUpdate[objectInDBFields[fieldName].id] = Object.assign(Object.assign({}, fieldsToUpdate[objectInDBFields[fieldName].id]), { [property]: diff.value });
                    }
                }
            }
            const createdObjectMetadataCollection = await this.objectMetadataRepository.save(objectsToCreate.map((object) => (Object.assign(Object.assign({}, object), { isActive: true, fields: Object.values(object.fields).map((field) => this.prepareFieldMetadataForCreation(field)) }))));
            const identifiers = createdObjectMetadataCollection.map((object) => object.id);
            const createdObjects = await this.objectMetadataRepository.find({
                where: { id: (0, typeorm_2.In)(identifiers) },
                relations: ['dataSource', 'fields'],
            });
            for (const [key, value] of Object.entries(objectsToUpdate)) {
                await this.objectMetadataRepository.update(key, value);
            }
            if (objectsToDelete.length > 0) {
                await this.objectMetadataRepository.delete(objectsToDelete.map((object) => object.id));
            }
            const createdFields = await this.fieldMetadataRepository.save(fieldsToCreate.map((field) => this.prepareFieldMetadataForCreation(field)));
            for (const [key, value] of Object.entries(fieldsToUpdate)) {
                await this.fieldMetadataRepository.update(key, (0, sync_metadata_util_1.convertStringifiedFieldsToJSON)(value));
            }
            const fieldsToDeleteWithoutRelationType = fieldsToDelete.filter((field) => field.type !== field_metadata_entity_1.FieldMetadataType.RELATION);
            if (fieldsToDeleteWithoutRelationType.length > 0) {
                await this.fieldMetadataRepository.delete(fieldsToDeleteWithoutRelationType.map((field) => field.id));
            }
            await this.generateMigrationsFromSync(createdObjects, objectsToDelete, createdFields, fieldsToDelete, objectsInDB);
            await this.syncRelationMetadata(workspaceId, dataSourceId, workspaceFeatureFlagsMap);
            await this.workspaceMigrationRunnerService.executeMigrationFromPendingMigrations(workspaceId);
        }
        catch (error) {
            console.error('Sync of standard objects failed with:', error);
        }
    }
    prepareFieldMetadataForCreation(field) {
        const convertedField = (0, sync_metadata_util_1.convertStringifiedFieldsToJSON)(field);
        return Object.assign(Object.assign(Object.assign({}, convertedField), (convertedField.type === field_metadata_entity_1.FieldMetadataType.SELECT &&
            convertedField.options
            ? {
                options: this.generateUUIDForNewSelectFieldOptions(convertedField.options),
            }
            : {})), { isActive: true });
    }
    generateUUIDForNewSelectFieldOptions(options) {
        return options.map((option) => (Object.assign(Object.assign({}, option), { id: (0, uuid_1.v4)() })));
    }
    async syncRelationMetadata(workspaceId, dataSourceId, workspaceFeatureFlagsMap) {
        const objectsInDB = await this.objectMetadataRepository.find({
            where: { workspaceId, isCustom: false },
            relations: ['dataSource', 'fields'],
        });
        const objectsInDBByName = (0, sync_metadata_util_1.mapObjectMetadataByUniqueIdentifier)(objectsInDB);
        const standardRelations = this.reflectiveMetadataFactory.createRelationMetadataCollection(standard_objects_1.standardObjectMetadata, workspaceId, objectsInDBByName, workspaceFeatureFlagsMap);
        const relationsInDB = await this.relationMetadataRepository.find({
            where: { workspaceId },
        });
        const relationsInDBWithoutIgnoredProperties = relationsInDB
            .map((relation) => (0, sync_metadata_util_1.filterIgnoredProperties)(relation, ['createdAt', 'updatedAt']))
            .reduce((result, currentObject) => {
            const key = `${currentObject.fromObjectMetadataId}->${currentObject.fromFieldMetadataId}`;
            result[key] = currentObject;
            return result;
        }, {});
        const relationsDiff = (0, microdiff_1.default)(relationsInDBWithoutIgnoredProperties, standardRelations);
        const relationsToCreate = [];
        const relationsToDelete = [];
        for (const diff of relationsDiff) {
            if (diff.type === 'CREATE') {
                relationsToCreate.push(diff.value);
            }
            if (diff.type === 'REMOVE' && diff.path[diff.path.length - 1] !== 'id') {
                relationsToDelete.push(diff.oldValue);
            }
        }
        try {
            await this.relationMetadataRepository.save(relationsToCreate);
            if (relationsToDelete.length > 0) {
                await this.relationMetadataRepository.delete(relationsToDelete.map((relation) => relation.id));
            }
            await this.generateRelationMigrationsFromSync(relationsToCreate, relationsToDelete, objectsInDB);
        }
        catch (error) {
            console.error('Sync of standard relations failed with:', error);
        }
    }
    async generateMigrationsFromSync(objectsToCreate, _objectsToDelete, fieldsToCreate, fieldsToDelete, objectsInDB) {
        const migrationsToSave = [];
        if (objectsToCreate.length > 0) {
            objectsToCreate.map((object) => {
                const migrations = [
                    {
                        name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(object),
                        action: 'create',
                    },
                    ...Object.values(object.fields)
                        .filter((field) => field.type !== field_metadata_entity_1.FieldMetadataType.RELATION)
                        .map((field) => ({
                        name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(object),
                        action: 'alter',
                        columns: this.workspaceMigrationFactory.createColumnActions(workspace_migration_entity_1.WorkspaceMigrationColumnActionType.CREATE, field),
                    })),
                ];
                migrationsToSave.push({
                    workspaceId: object.workspaceId,
                    isCustom: false,
                    migrations,
                });
            });
        }
        const objectsInDbById = objectsInDB.reduce((result, currentObject) => {
            result[currentObject.id] = currentObject;
            return result;
        }, {});
        if (fieldsToCreate.length > 0) {
            fieldsToCreate.map((field) => {
                const migrations = [
                    {
                        name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(objectsInDbById[field.objectMetadataId]),
                        action: 'alter',
                        columns: this.workspaceMigrationFactory.createColumnActions(workspace_migration_entity_1.WorkspaceMigrationColumnActionType.CREATE, field),
                    },
                ];
                migrationsToSave.push({
                    workspaceId: field.workspaceId,
                    isCustom: false,
                    migrations,
                });
            });
        }
        if (fieldsToDelete.length > 0) {
            fieldsToDelete.map((field) => {
                const migrations = [
                    {
                        name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(objectsInDbById[field.objectMetadataId]),
                        action: 'alter',
                        columns: [
                            {
                                action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.DROP,
                                columnName: field.name,
                            },
                        ],
                    },
                ];
                migrationsToSave.push({
                    workspaceId: field.workspaceId,
                    isCustom: false,
                    migrations,
                });
            });
        }
        await this.workspaceMigrationRepository.save(migrationsToSave);
    }
    async generateRelationMigrationsFromSync(relationsToCreate, _relationsToDelete, objectsInDB) {
        const relationsMigrationsToSave = [];
        if (relationsToCreate.length > 0) {
            relationsToCreate.map((relation) => {
                const toObjectMetadata = objectsInDB.find((object) => object.id === relation.toObjectMetadataId);
                const fromObjectMetadata = objectsInDB.find((object) => object.id === relation.fromObjectMetadataId);
                if (!toObjectMetadata) {
                    throw new Error(`ObjectMetadata with id ${relation.toObjectMetadataId} not found`);
                }
                if (!fromObjectMetadata) {
                    throw new Error(`ObjectMetadata with id ${relation.fromObjectMetadataId} not found`);
                }
                const toFieldMetadata = toObjectMetadata.fields.find((field) => field.id === relation.toFieldMetadataId);
                if (!toFieldMetadata) {
                    throw new Error(`FieldMetadata with id ${relation.toFieldMetadataId} not found`);
                }
                const migrations = [
                    {
                        name: (0, compute_object_target_table_util_1.computeObjectTargetTable)(toObjectMetadata),
                        action: 'alter',
                        columns: [
                            {
                                action: workspace_migration_entity_1.WorkspaceMigrationColumnActionType.RELATION,
                                columnName: `${(0, lodash_camelcase_1.default)(toFieldMetadata.name)}Id`,
                                referencedTableName: (0, compute_object_target_table_util_1.computeObjectTargetTable)(fromObjectMetadata),
                                referencedTableColumnName: 'id',
                                isUnique: relation.relationType === relation_metadata_entity_1.RelationMetadataType.ONE_TO_ONE,
                            },
                        ],
                    },
                ];
                relationsMigrationsToSave.push({
                    workspaceId: relation.workspaceId,
                    isCustom: false,
                    migrations,
                });
            });
        }
        await this.workspaceMigrationRepository.save(relationsMigrationsToSave);
    }
};
exports.WorkspaceSyncMetadataService = WorkspaceSyncMetadataService;
exports.WorkspaceSyncMetadataService = WorkspaceSyncMetadataService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, typeorm_1.InjectRepository)(object_metadata_entity_1.ObjectMetadataEntity, 'metadata')),
    __param(4, (0, typeorm_1.InjectRepository)(field_metadata_entity_1.FieldMetadataEntity, 'metadata')),
    __param(5, (0, typeorm_1.InjectRepository)(relation_metadata_entity_1.RelationMetadataEntity, 'metadata')),
    __param(6, (0, typeorm_1.InjectRepository)(workspace_migration_entity_1.WorkspaceMigrationEntity, 'metadata')),
    __param(7, (0, typeorm_1.InjectRepository)(feature_flag_entity_1.FeatureFlagEntity, 'core')),
    __metadata("design:paramtypes", [workspace_migration_factory_1.WorkspaceMigrationFactory,
        workspace_migration_runner_service_1.WorkspaceMigrationRunnerService,
        reflective_metadata_factory_1.ReflectiveMetadataFactory,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], WorkspaceSyncMetadataService);
//# sourceMappingURL=workspace-sync.metadata.service.js.map