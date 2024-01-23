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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMetadataHealthService = void 0;
const common_1 = require("@nestjs/common");
const workspace_health_issue_interface_1 = require("../interfaces/workspace-health-issue.interface");
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const is_composite_field_metadata_type_util_1 = require("../../../metadata/field-metadata/utils/is-composite-field-metadata-type.util");
const database_structure_service_1 = require("./database-structure.service");
const valid_name_util_1 = require("../utils/valid-name.util");
const composite_types_1 = require("../../../metadata/field-metadata/composite-types");
const validate_default_value_for_type_util_1 = require("../../../metadata/field-metadata/utils/validate-default-value-for-type.util");
const is_enum_field_metadata_type_util_1 = require("../../../metadata/field-metadata/utils/is-enum-field-metadata-type.util");
const validate_options_for_type_util_1 = require("../../../metadata/field-metadata/utils/validate-options-for-type.util");
let FieldMetadataHealthService = class FieldMetadataHealthService {
    constructor(databaseStructureService) {
        this.databaseStructureService = databaseStructureService;
    }
    async healthCheck(tableName, workspaceTableColumns, fieldMetadataCollection, options) {
        var _a, _b;
        const issues = [];
        for (const fieldMetadata of fieldMetadataCollection) {
            if (fieldMetadata.fromRelationMetadata ||
                fieldMetadata.toRelationMetadata) {
                continue;
            }
            if ((0, is_composite_field_metadata_type_util_1.isCompositeFieldMetadataType)(fieldMetadata.type)) {
                const compositeFieldMetadataCollection = (_b = (_a = composite_types_1.compositeDefinitions.get(fieldMetadata.type)) === null || _a === void 0 ? void 0 : _a(fieldMetadata)) !== null && _b !== void 0 ? _b : [];
                if (options.mode === 'metadata' || options.mode === 'all') {
                    const targetColumnMapIssues = this.targetColumnMapCheck(fieldMetadata);
                    issues.push(...targetColumnMapIssues);
                    const defaultValueIssues = this.defaultValueHealthCheck(fieldMetadata);
                    issues.push(...defaultValueIssues);
                }
                for (const compositeFieldMetadata of compositeFieldMetadataCollection) {
                    const compositeFieldIssues = await this.healthCheckField(tableName, workspaceTableColumns, compositeFieldMetadata, options);
                    issues.push(...compositeFieldIssues);
                }
            }
            else {
                const fieldIssues = await this.healthCheckField(tableName, workspaceTableColumns, fieldMetadata, options);
                issues.push(...fieldIssues);
            }
        }
        return issues;
    }
    async healthCheckField(tableName, workspaceTableColumns, fieldMetadata, options) {
        const issues = [];
        if (options.mode === 'structure' || options.mode === 'all') {
            const structureIssues = this.structureFieldCheck(tableName, workspaceTableColumns, fieldMetadata);
            issues.push(...structureIssues);
        }
        if (options.mode === 'metadata' || options.mode === 'all') {
            const metadataIssues = this.metadataFieldCheck(tableName, fieldMetadata);
            issues.push(...metadataIssues);
        }
        return issues;
    }
    structureFieldCheck(tableName, workspaceTableColumns, fieldMetadata) {
        var _a;
        const issues = [];
        const columnName = fieldMetadata.targetColumnMap.value;
        const dataType = this.databaseStructureService.getPostgresDataType(fieldMetadata.type, fieldMetadata.name, (_a = fieldMetadata.object) === null || _a === void 0 ? void 0 : _a.nameSingular);
        const defaultValue = this.databaseStructureService.getPostgresDefault(fieldMetadata.type, fieldMetadata.defaultValue);
        const columnStructure = workspaceTableColumns.find((tableDefinition) => tableDefinition.columnName === columnName);
        if (!columnStructure) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.MISSING_COLUMN,
                fieldMetadata,
                columnStructure,
                message: `Column ${columnName} not found in table ${tableName}`,
            });
            return issues;
        }
        if (columnStructure.dataType !== dataType) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_DATA_TYPE_CONFLICT,
                fieldMetadata,
                columnStructure,
                message: `Column ${columnName} type is not the same as the field metadata type "${columnStructure.dataType}" !== "${dataType}"`,
            });
        }
        if (columnStructure.isNullable !== fieldMetadata.isNullable) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_NULLABILITY_CONFLICT,
                fieldMetadata,
                columnStructure,
                message: `Column ${columnName} is expected to be ${fieldMetadata.isNullable ? 'nullable' : 'not nullable'} but is ${columnStructure.isNullable ? 'nullable' : 'not nullable'}`,
            });
        }
        if (defaultValue &&
            columnStructure.columnDefault &&
            !columnStructure.columnDefault.startsWith(defaultValue)) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_DEFAULT_VALUE_CONFLICT,
                fieldMetadata,
                columnStructure,
                message: `Column ${columnName} default value is not the same as the field metadata default value "${columnStructure.columnDefault}" !== "${defaultValue}"`,
            });
        }
        return issues;
    }
    metadataFieldCheck(tableName, fieldMetadata) {
        var _a;
        const issues = [];
        const columnName = fieldMetadata.targetColumnMap.value;
        const targetColumnMapIssues = this.targetColumnMapCheck(fieldMetadata);
        const defaultValueIssues = this.defaultValueHealthCheck(fieldMetadata);
        if (Object.keys(fieldMetadata.targetColumnMap).length !== 1) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_TARGET_COLUMN_MAP_NOT_VALID,
                fieldMetadata,
                message: `Column ${columnName} has more than one target column map, it should only contains "value"`,
            });
        }
        issues.push(...targetColumnMapIssues);
        if (fieldMetadata.isCustom && !(columnName === null || columnName === void 0 ? void 0 : columnName.startsWith('_'))) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_NAME_SHOULD_BE_CUSTOM,
                fieldMetadata,
                message: `Column ${columnName} is marked as custom in table ${tableName} but doesn't start with "_"`,
            });
        }
        if (!fieldMetadata.objectMetadataId) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_OBJECT_REFERENCE_INVALID,
                fieldMetadata,
                message: `Column ${columnName} doesn't have a valid object metadata id`,
            });
        }
        if (!Object.values(field_metadata_entity_1.FieldMetadataType).includes(fieldMetadata.type)) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_TYPE_NOT_VALID,
                fieldMetadata,
                message: `Column ${columnName} doesn't have a valid field metadata type`,
            });
        }
        if (!fieldMetadata.name ||
            !(0, valid_name_util_1.validName)(fieldMetadata.name) ||
            !fieldMetadata.label) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_NAME_NOT_VALID,
                fieldMetadata,
                message: `Column ${columnName} doesn't have a valid name or label`,
            });
        }
        if ((0, is_enum_field_metadata_type_util_1.isEnumFieldMetadataType)(fieldMetadata.type) &&
            !(0, validate_options_for_type_util_1.validateOptionsForType)(fieldMetadata.type, fieldMetadata.options)) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_OPTIONS_NOT_VALID,
                fieldMetadata,
                message: `Column options of ${(_a = fieldMetadata.targetColumnMap) === null || _a === void 0 ? void 0 : _a.value} is not valid`,
            });
        }
        issues.push(...defaultValueIssues);
        return issues;
    }
    targetColumnMapCheck(fieldMetadata) {
        const issues = [];
        if (!fieldMetadata.targetColumnMap) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_TARGET_COLUMN_MAP_NOT_VALID,
                fieldMetadata,
                message: `Column targetColumnMap of ${fieldMetadata.name} is empty`,
            });
        }
        if (!(0, is_composite_field_metadata_type_util_1.isCompositeFieldMetadataType)(fieldMetadata.type)) {
            if (Object.keys(fieldMetadata.targetColumnMap).length !== 1 &&
                !('value' in fieldMetadata.targetColumnMap)) {
                issues.push({
                    type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_TARGET_COLUMN_MAP_NOT_VALID,
                    fieldMetadata,
                    message: `Column targetColumnMap "${fieldMetadata.targetColumnMap}" is not valid or well structured`,
                });
            }
            return issues;
        }
        if (!this.isCompositeObjectWellStructured(fieldMetadata.type, fieldMetadata.targetColumnMap)) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_TARGET_COLUMN_MAP_NOT_VALID,
                fieldMetadata,
                message: `Column targetColumnMap for composite type ${fieldMetadata.type} is not well structured "${fieldMetadata.targetColumnMap}"`,
            });
        }
        return issues;
    }
    defaultValueHealthCheck(fieldMetadata) {
        const issues = [];
        if (!(0, validate_default_value_for_type_util_1.validateDefaultValueForType)(fieldMetadata.type, fieldMetadata.defaultValue)) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.COLUMN_DEFAULT_VALUE_NOT_VALID,
                fieldMetadata,
                message: `Column default value for composite type ${fieldMetadata.type} is not well structured`,
            });
        }
        return issues;
    }
    isCompositeObjectWellStructured(fieldMetadataType, object) {
        var _a, _b;
        const subFields = (_b = (_a = composite_types_1.compositeDefinitions.get(fieldMetadataType)) === null || _a === void 0 ? void 0 : _a()) !== null && _b !== void 0 ? _b : [];
        if (!object) {
            return true;
        }
        if (subFields.length === 0) {
            throw new common_1.InternalServerErrorException(`The composite field type ${fieldMetadataType} doesn't have any sub fields, it seems this one is not implemented in the composite definitions map`);
        }
        for (const subField of subFields) {
            if (!object[subField.name]) {
                return false;
            }
        }
        return true;
    }
};
exports.FieldMetadataHealthService = FieldMetadataHealthService;
exports.FieldMetadataHealthService = FieldMetadataHealthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_structure_service_1.DatabaseStructureService])
], FieldMetadataHealthService);
//# sourceMappingURL=field-metadata-health.service.js.map