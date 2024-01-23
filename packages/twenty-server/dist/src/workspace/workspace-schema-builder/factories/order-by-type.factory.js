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
var OrderByTypeFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderByTypeFactory = void 0;
const common_1 = require("@nestjs/common");
const type_mapper_service_1 = require("../services/type-mapper.service");
const type_definitions_storage_1 = require("../storages/type-definitions.storage");
const is_composite_field_metadata_type_util_1 = require("../../../metadata/field-metadata/utils/is-composite-field-metadata-type.util");
const input_type_definition_factory_1 = require("./input-type-definition.factory");
let OrderByTypeFactory = OrderByTypeFactory_1 = class OrderByTypeFactory {
    constructor(typeMapperService, typeDefinitionsStorage) {
        this.typeMapperService = typeMapperService;
        this.typeDefinitionsStorage = typeDefinitionsStorage;
        this.logger = new common_1.Logger(OrderByTypeFactory_1.name);
    }
    create(fieldMetadata, buildOtions, typeOptions) {
        const target = (0, is_composite_field_metadata_type_util_1.isCompositeFieldMetadataType)(fieldMetadata.type)
            ? fieldMetadata.type.toString()
            : fieldMetadata.id;
        let orderByType = this.typeMapperService.mapToOrderByType(fieldMetadata.type);
        orderByType !== null && orderByType !== void 0 ? orderByType : (orderByType = this.typeDefinitionsStorage.getInputTypeByKey(target, input_type_definition_factory_1.InputTypeDefinitionKind.OrderBy));
        if (!orderByType) {
            this.logger.error(`Could not find a GraphQL type for ${target}`, {
                fieldMetadata,
                buildOtions,
                typeOptions,
            });
            throw new Error(`Could not find a GraphQL type for ${target}`);
        }
        return this.typeMapperService.mapToGqlType(orderByType, typeOptions);
    }
};
exports.OrderByTypeFactory = OrderByTypeFactory;
exports.OrderByTypeFactory = OrderByTypeFactory = OrderByTypeFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [type_mapper_service_1.TypeMapperService,
        type_definitions_storage_1.TypeDefinitionsStorage])
], OrderByTypeFactory);
//# sourceMappingURL=order-by-type.factory.js.map