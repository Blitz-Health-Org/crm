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
exports.OrderByTypeDefinitionFactory = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const pascal_case_1 = require("../../../utils/pascal-case");
const is_relation_field_metadata_type_util_1 = require("../../utils/is-relation-field-metadata-type.util");
const input_type_definition_factory_1 = require("./input-type-definition.factory");
const order_by_type_factory_1 = require("./order-by-type.factory");
let OrderByTypeDefinitionFactory = class OrderByTypeDefinitionFactory {
    constructor(orderByTypeFactory) {
        this.orderByTypeFactory = orderByTypeFactory;
    }
    create(objectMetadata, options) {
        const kind = input_type_definition_factory_1.InputTypeDefinitionKind.OrderBy;
        return {
            target: objectMetadata.id,
            kind,
            type: new graphql_1.GraphQLInputObjectType({
                name: `${(0, pascal_case_1.pascalCase)(objectMetadata.nameSingular)}${kind.toString()}Input`,
                description: objectMetadata.description,
                fields: this.generateFields(objectMetadata, options),
            }),
        };
    }
    generateFields(objectMetadata, options) {
        const fields = {};
        for (const fieldMetadata of objectMetadata.fields) {
            if ((0, is_relation_field_metadata_type_util_1.isRelationFieldMetadataType)(fieldMetadata.type)) {
                continue;
            }
            const type = this.orderByTypeFactory.create(fieldMetadata, options, {
                nullable: fieldMetadata.isNullable,
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
exports.OrderByTypeDefinitionFactory = OrderByTypeDefinitionFactory;
exports.OrderByTypeDefinitionFactory = OrderByTypeDefinitionFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_by_type_factory_1.OrderByTypeFactory])
], OrderByTypeDefinitionFactory);
//# sourceMappingURL=order-by-type-definition.factory.js.map