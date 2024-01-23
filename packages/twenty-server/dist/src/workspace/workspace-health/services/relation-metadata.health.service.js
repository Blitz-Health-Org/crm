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
exports.RelationMetadataHealthService = void 0;
const common_1 = require("@nestjs/common");
const workspace_health_issue_interface_1 = require("../interfaces/workspace-health-issue.interface");
const workspace_health_options_interface_1 = require("../interfaces/workspace-health-options.interface");
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const deduce_relation_direction_util_1 = require("../../utils/deduce-relation-direction.util");
const create_relation_foreign_key_column_name_util_1 = require("../../../metadata/relation-metadata/utils/create-relation-foreign-key-column-name.util");
const create_relation_foreign_key_field_metadata_name_util_1 = require("../../../metadata/relation-metadata/utils/create-relation-foreign-key-field-metadata-name.util");
let RelationMetadataHealthService = class RelationMetadataHealthService {
    constructor() { }
    healthCheck(workspaceTableColumns, objectMetadataCollection, objectMetadata, options) {
        var _a, _b;
        const issues = [];
        for (const fieldMetadata of objectMetadata.fields) {
            if (fieldMetadata.type !== field_metadata_entity_1.FieldMetadataType.RELATION) {
                continue;
            }
            const relationMetadata = (_a = fieldMetadata.fromRelationMetadata) !== null && _a !== void 0 ? _a : fieldMetadata.toRelationMetadata;
            const relationDirection = (0, deduce_relation_direction_util_1.deduceRelationDirection)(objectMetadata.id, relationMetadata);
            if (relationMetadata.relationType === relation_metadata_entity_1.RelationMetadataType.MANY_TO_MANY) {
                return [];
            }
            const fromObjectMetadata = objectMetadataCollection.find((objectMetadata) => objectMetadata.id === relationMetadata.fromObjectMetadataId);
            const fromFieldMetadata = fromObjectMetadata === null || fromObjectMetadata === void 0 ? void 0 : fromObjectMetadata.fields.find((fieldMetadata) => fieldMetadata.id === relationMetadata.fromFieldMetadataId);
            const toObjectMetadata = objectMetadataCollection.find((objectMetadata) => objectMetadata.id === relationMetadata.toObjectMetadataId);
            const toFieldMetadata = toObjectMetadata === null || toObjectMetadata === void 0 ? void 0 : toObjectMetadata.fields.find((fieldMetadata) => fieldMetadata.id === relationMetadata.toFieldMetadataId);
            if (!fromFieldMetadata || !toFieldMetadata) {
                issues.push({
                    type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.RELATION_FROM_OR_TO_FIELD_METADATA_NOT_VALID,
                    fromFieldMetadata,
                    toFieldMetadata,
                    relationMetadata,
                    message: `Relation ${relationMetadata.id} has invalid from or to field metadata`,
                });
                return issues;
            }
            if (options.mode === workspace_health_options_interface_1.WorkspaceHealthMode.All ||
                options.mode === workspace_health_options_interface_1.WorkspaceHealthMode.Structure) {
                const structureIssues = this.structureRelationCheck(fromFieldMetadata, toFieldMetadata, (_b = toObjectMetadata === null || toObjectMetadata === void 0 ? void 0 : toObjectMetadata.fields) !== null && _b !== void 0 ? _b : [], relationDirection, relationMetadata, workspaceTableColumns);
                issues.push(...structureIssues);
            }
            if (options.mode === workspace_health_options_interface_1.WorkspaceHealthMode.All ||
                options.mode === workspace_health_options_interface_1.WorkspaceHealthMode.Metadata) {
                const metadataIssues = this.metadataRelationCheck(fromFieldMetadata, toFieldMetadata, relationDirection, relationMetadata);
                issues.push(...metadataIssues);
            }
        }
        return issues;
    }
    structureRelationCheck(fromFieldMetadata, toFieldMetadata, toObjectMetadataFields, relationDirection, relationMetadata, workspaceTableColumns) {
        var _a;
        const issues = [];
        if (relationDirection === deduce_relation_direction_util_1.RelationDirection.FROM) {
            return [];
        }
        const isCustom = (_a = toFieldMetadata.isCustom) !== null && _a !== void 0 ? _a : false;
        const foreignKeyColumnName = (0, create_relation_foreign_key_column_name_util_1.createRelationForeignKeyColumnName)(toFieldMetadata.name, isCustom);
        const relationColumn = workspaceTableColumns.find((column) => column.columnName === foreignKeyColumnName);
        const relationFieldMetadata = toObjectMetadataFields.find((fieldMetadata) => fieldMetadata.name ===
            (0, create_relation_foreign_key_field_metadata_name_util_1.createRelationForeignKeyFieldMetadataName)(toFieldMetadata.name));
        if (!relationFieldMetadata) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.RELATION_FOREIGN_KEY_NOT_VALID,
                fromFieldMetadata,
                toFieldMetadata,
                relationMetadata,
                message: `Relation ${relationMetadata.id} doesn't have a valid foreign key (expected fieldMetadata.name to be ${(0, create_relation_foreign_key_field_metadata_name_util_1.createRelationForeignKeyFieldMetadataName)(toFieldMetadata.name)}`,
            });
            return issues;
        }
        if (!relationColumn) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.RELATION_FOREIGN_KEY_NOT_VALID,
                fromFieldMetadata,
                toFieldMetadata,
                relationMetadata,
                message: `Relation ${relationMetadata.id} doesn't have a valid foreign key (expected column name to be ${foreignKeyColumnName}`,
            });
            return issues;
        }
        if (!relationColumn.isForeignKey) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.RELATION_FOREIGN_KEY_CONFLICT,
                fromFieldMetadata,
                toFieldMetadata,
                relationMetadata,
                message: `Relation ${relationMetadata.id} foreign key is not properly set`,
            });
        }
        if (relationColumn.isNullable !== relationFieldMetadata.isNullable) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.RELATION_NULLABILITY_CONFLICT,
                fromFieldMetadata,
                toFieldMetadata,
                relationMetadata,
                message: `Relation ${relationMetadata.id} foreign key is not properly set`,
            });
        }
        if (relationMetadata.relationType === relation_metadata_entity_1.RelationMetadataType.ONE_TO_ONE &&
            !relationColumn.isUnique) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.RELATION_FOREIGN_KEY_CONFLICT,
                fromFieldMetadata,
                toFieldMetadata,
                relationMetadata,
                message: `Relation ${relationMetadata.id} foreign key is not marked as unique and relation type is one-to-one`,
            });
        }
        return issues;
    }
    metadataRelationCheck(fromFieldMetadata, toFieldMetadata, relationDirection, relationMetadata) {
        const issues = [];
        if (!Object.values(relation_metadata_entity_1.RelationMetadataType).includes(relationMetadata.relationType)) {
            issues.push({
                type: workspace_health_issue_interface_1.WorkspaceHealthIssueType.RELATION_TYPE_NOT_VALID,
                fromFieldMetadata,
                toFieldMetadata,
                relationMetadata,
                message: `Relation ${relationMetadata.id} has invalid relation type`,
            });
        }
        return issues;
    }
};
exports.RelationMetadataHealthService = RelationMetadataHealthService;
exports.RelationMetadataHealthService = RelationMetadataHealthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RelationMetadataHealthService);
//# sourceMappingURL=relation-metadata.health.service.js.map