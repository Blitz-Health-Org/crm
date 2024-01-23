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
exports.FilterTypeDefinitionFactory = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const pascal_case_1 = require("../../../utils/pascal-case");
const type_mapper_service_1 = require("../services/type-mapper.service");
const is_relation_field_metadata_type_util_1 = require("../../utils/is-relation-field-metadata-type.util");
const filter_type_factory_1 = require("./filter-type.factory");
const input_type_definition_factory_1 = require("./input-type-definition.factory");
let FilterTypeDefinitionFactory = class FilterTypeDefinitionFactory {
    constructor(filterTypeFactory, typeMapperService) {
        this.filterTypeFactory = filterTypeFactory;
        this.typeMapperService = typeMapperService;
    }
    create(objectMetadata, options) {
        const kind = input_type_definition_factory_1.InputTypeDefinitionKind.Filter;
        const filterInputType = new graphql_1.GraphQLInputObjectType({
            name: `${(0, pascal_case_1.pascalCase)(objectMetadata.nameSingular)}${kind.toString()}Input`,
            description: objectMetadata.description,
            fields: () => {
                const andOrType = this.typeMapperService.mapToGqlType(filterInputType, {
                    isArray: true,
                    arrayDepth: 1,
                    nullable: true,
                });
                return Object.assign(Object.assign({}, this.generateFields(objectMetadata, options)), { and: {
                        type: andOrType,
                    }, or: {
                        type: andOrType,
                    }, not: {
                        type: this.typeMapperService.mapToGqlType(filterInputType, {
                            nullable: true,
                        }),
                    } });
            },
        });
        return {
            target: objectMetadata.id,
            kind,
            type: filterInputType,
        };
    }
    generateFields(objectMetadata, options) {
        const fields = {};
        for (const fieldMetadata of objectMetadata.fields) {
            if ((0, is_relation_field_metadata_type_util_1.isRelationFieldMetadataType)(fieldMetadata.type)) {
            }
            const type = this.filterTypeFactory.create(fieldMetadata, options, {
                nullable: fieldMetadata.isNullable,
                defaultValue: fieldMetadata.defaultValue,
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
exports.FilterTypeDefinitionFactory = FilterTypeDefinitionFactory;
exports.FilterTypeDefinitionFactory = FilterTypeDefinitionFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [filter_type_factory_1.FilterTypeFactory,
        type_mapper_service_1.TypeMapperService])
], FilterTypeDefinitionFactory);
//# sourceMappingURL=filter-type-definition.factory.js.map