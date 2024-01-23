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
exports.InputTypeDefinitionFactory = exports.InputTypeDefinitionKind = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const pascal_case_1 = require("../../../utils/pascal-case");
const is_relation_field_metadata_type_util_1 = require("../../utils/is-relation-field-metadata-type.util");
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const input_type_factory_1 = require("./input-type.factory");
var InputTypeDefinitionKind;
(function (InputTypeDefinitionKind) {
    InputTypeDefinitionKind["Create"] = "Create";
    InputTypeDefinitionKind["Update"] = "Update";
    InputTypeDefinitionKind["Filter"] = "Filter";
    InputTypeDefinitionKind["OrderBy"] = "OrderBy";
})(InputTypeDefinitionKind || (exports.InputTypeDefinitionKind = InputTypeDefinitionKind = {}));
let InputTypeDefinitionFactory = class InputTypeDefinitionFactory {
    constructor(inputTypeFactory) {
        this.inputTypeFactory = inputTypeFactory;
    }
    create(objectMetadata, kind, options) {
        return {
            target: objectMetadata.id,
            kind,
            type: new graphql_1.GraphQLInputObjectType({
                name: `${(0, pascal_case_1.pascalCase)(objectMetadata.nameSingular)}${kind.toString()}Input`,
                description: objectMetadata.description,
                fields: this.generateFields(objectMetadata, kind, options),
            }),
        };
    }
    generateFields(objectMetadata, kind, options) {
        const fields = {};
        for (const fieldMetadata of objectMetadata.fields) {
            if ((0, is_relation_field_metadata_type_util_1.isRelationFieldMetadataType)(fieldMetadata.type)) {
            }
            const type = this.inputTypeFactory.create(fieldMetadata, kind, options, {
                nullable: fieldMetadata.isNullable,
                defaultValue: fieldMetadata.defaultValue,
                isArray: fieldMetadata.type === field_metadata_entity_1.FieldMetadataType.MULTI_SELECT,
            });
            fields[fieldMetadata.name] = {
                type,
                description: fieldMetadata.description,
                defaultValue: undefined,
            };
        }
        return fields;
    }
};
exports.InputTypeDefinitionFactory = InputTypeDefinitionFactory;
exports.InputTypeDefinitionFactory = InputTypeDefinitionFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [input_type_factory_1.InputTypeFactory])
], InputTypeDefinitionFactory);
//# sourceMappingURL=input-type-definition.factory.js.map