"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EnumTypeDefinitionFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTypeDefinitionFactory = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const pascal_case_1 = require("../../../utils/pascal-case");
const is_enum_field_metadata_type_util_1 = require("../../../metadata/field-metadata/utils/is-enum-field-metadata-type.util");
let EnumTypeDefinitionFactory = EnumTypeDefinitionFactory_1 = class EnumTypeDefinitionFactory {
    constructor() {
        this.logger = new common_1.Logger(EnumTypeDefinitionFactory_1.name);
    }
    create(objectMetadata, options) {
        const enumTypeDefinitions = [];
        for (const fieldMetadata of objectMetadata.fields) {
            if (!(0, is_enum_field_metadata_type_util_1.isEnumFieldMetadataType)(fieldMetadata.type)) {
                continue;
            }
            enumTypeDefinitions.push({
                target: fieldMetadata.id,
                type: this.generateEnum(objectMetadata.nameSingular, fieldMetadata, options),
            });
        }
        return enumTypeDefinitions;
    }
    generateEnum(objectName, fieldMetadata, options) {
        const enumOptions = fieldMetadata.options;
        if (!enumOptions) {
            this.logger.error(`Enum options are not defined for ${fieldMetadata.name}`, {
                fieldMetadata,
                options,
            });
            throw new Error(`Enum options are not defined for ${fieldMetadata.name}`);
        }
        return new graphql_1.GraphQLEnumType({
            name: `${(0, pascal_case_1.pascalCase)(objectName)}${(0, pascal_case_1.pascalCase)(fieldMetadata.name)}Enum`,
            description: fieldMetadata.description,
            values: enumOptions.reduce((acc, enumOption) => {
                acc[enumOption.value] = {
                    value: enumOption.value,
                    description: enumOption.label,
                };
                return acc;
            }, {}),
        });
    }
};
exports.EnumTypeDefinitionFactory = EnumTypeDefinitionFactory;
exports.EnumTypeDefinitionFactory = EnumTypeDefinitionFactory = EnumTypeDefinitionFactory_1 = __decorate([
    (0, common_1.Injectable)()
], EnumTypeDefinitionFactory);
//# sourceMappingURL=enum-type-definition.factory.js.map