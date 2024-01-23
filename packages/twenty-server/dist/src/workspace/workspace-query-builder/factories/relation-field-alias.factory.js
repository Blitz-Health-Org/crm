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
var RelationFieldAliasFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationFieldAliasFactory = void 0;
const common_1 = require("@nestjs/common");
const is_relation_field_metadata_type_util_1 = require("../../utils/is-relation-field-metadata-type.util");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const deduce_relation_direction_util_1 = require("../../utils/deduce-relation-direction.util");
const get_field_arguments_by_key_util_1 = require("../utils/get-field-arguments-by-key.util");
const object_metadata_service_1 = require("../../../metadata/object-metadata/object-metadata.service");
const compute_object_target_table_util_1 = require("../../utils/compute-object-target-table.util");
const fields_string_factory_1 = require("./fields-string.factory");
const args_string_factory_1 = require("./args-string.factory");
let RelationFieldAliasFactory = RelationFieldAliasFactory_1 = class RelationFieldAliasFactory {
    constructor(fieldsStringFactory, argsStringFactory, objectMetadataService) {
        this.fieldsStringFactory = fieldsStringFactory;
        this.argsStringFactory = argsStringFactory;
        this.objectMetadataService = objectMetadataService;
        this.logger = new common_1.Logger(RelationFieldAliasFactory_1.name);
    }
    create(fieldKey, fieldValue, fieldMetadata, objectMetadataCollection, info) {
        if (!(0, is_relation_field_metadata_type_util_1.isRelationFieldMetadataType)(fieldMetadata.type)) {
            throw new Error(`Field ${fieldMetadata.name} is not a relation field`);
        }
        return this.createRelationAlias(fieldKey, fieldValue, fieldMetadata, objectMetadataCollection, info);
    }
    async createRelationAlias(fieldKey, fieldValue, fieldMetadata, objectMetadataCollection, info) {
        var _a, _b, _c, _d;
        const relationMetadata = (_a = fieldMetadata.fromRelationMetadata) !== null && _a !== void 0 ? _a : fieldMetadata.toRelationMetadata;
        if (!relationMetadata) {
            throw new Error(`Relation metadata not found for field ${fieldMetadata.name}`);
        }
        if (!fieldMetadata.workspaceId) {
            throw new Error(`Workspace id not found for field ${fieldMetadata.name} in object metadata ${fieldMetadata.objectMetadataId}`);
        }
        const relationDirection = (0, deduce_relation_direction_util_1.deduceRelationDirection)(fieldMetadata.objectMetadataId, relationMetadata);
        const referencedObjectMetadata = objectMetadataCollection.find((objectMetadata) => objectMetadata.id ===
            (relationDirection == deduce_relation_direction_util_1.RelationDirection.TO
                ? relationMetadata.fromObjectMetadataId
                : relationMetadata.toObjectMetadataId));
        if (!referencedObjectMetadata) {
            throw new Error(`Referenced object metadata not found for relation ${relationMetadata.id}`);
        }
        if (relationMetadata.relationType === relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY &&
            relationDirection === deduce_relation_direction_util_1.RelationDirection.FROM) {
            const args = (0, get_field_arguments_by_key_util_1.getFieldArgumentsByKey)(info, fieldKey);
            const argsString = this.argsStringFactory.create(args, (_b = referencedObjectMetadata.fields) !== null && _b !== void 0 ? _b : []);
            const fieldsString = await this.fieldsStringFactory.createFieldsStringRecursive(info, fieldValue, (_c = referencedObjectMetadata.fields) !== null && _c !== void 0 ? _c : [], objectMetadataCollection);
            return `
        ${fieldKey}: ${(0, compute_object_target_table_util_1.computeObjectTargetTable)(referencedObjectMetadata)}Collection${argsString ? `(${argsString})` : ''} {
          ${fieldsString}
        }
      `;
        }
        let relationAlias = fieldMetadata.isCustom
            ? `${fieldKey}: _${fieldMetadata.name}`
            : fieldKey;
        if (relationMetadata.relationType === relation_metadata_entity_1.RelationMetadataType.ONE_TO_ONE &&
            relationDirection === deduce_relation_direction_util_1.RelationDirection.FROM) {
            relationAlias = `${fieldKey}: ${(0, compute_object_target_table_util_1.computeObjectTargetTable)(referencedObjectMetadata)}`;
        }
        const fieldsString = await this.fieldsStringFactory.createFieldsStringRecursive(info, fieldValue, (_d = referencedObjectMetadata.fields) !== null && _d !== void 0 ? _d : [], objectMetadataCollection);
        return `
      ${relationAlias} {
        ${fieldsString}
      }
    `;
    }
};
exports.RelationFieldAliasFactory = RelationFieldAliasFactory;
exports.RelationFieldAliasFactory = RelationFieldAliasFactory = RelationFieldAliasFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => fields_string_factory_1.FieldsStringFactory))),
    __metadata("design:paramtypes", [fields_string_factory_1.FieldsStringFactory,
        args_string_factory_1.ArgsStringFactory,
        object_metadata_service_1.ObjectMetadataService])
], RelationFieldAliasFactory);
//# sourceMappingURL=relation-field-alias.factory.js.map