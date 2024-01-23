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
var OutputTypeFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputTypeFactory = void 0;
const common_1 = require("@nestjs/common");
const type_mapper_service_1 = require("../services/type-mapper.service");
const type_definitions_storage_1 = require("../storages/type-definitions.storage");
const is_composite_field_metadata_type_util_1 = require("../../../metadata/field-metadata/utils/is-composite-field-metadata-type.util");
let OutputTypeFactory = OutputTypeFactory_1 = class OutputTypeFactory {
    constructor(typeMapperService, typeDefinitionsStorage) {
        this.typeMapperService = typeMapperService;
        this.typeDefinitionsStorage = typeDefinitionsStorage;
        this.logger = new common_1.Logger(OutputTypeFactory_1.name);
    }
    create(fieldMetadata, kind, buildOtions, typeOptions) {
        const target = (0, is_composite_field_metadata_type_util_1.isCompositeFieldMetadataType)(fieldMetadata.type)
            ? fieldMetadata.type.toString()
            : fieldMetadata.id;
        let gqlType = this.typeMapperService.mapToScalarType(fieldMetadata.type, buildOtions.dateScalarMode, buildOtions.numberScalarMode);
        gqlType !== null && gqlType !== void 0 ? gqlType : (gqlType = this.typeDefinitionsStorage.getObjectTypeByKey(target, kind));
        gqlType !== null && gqlType !== void 0 ? gqlType : (gqlType = this.typeDefinitionsStorage.getEnumTypeByKey(target));
        if (!gqlType) {
            this.logger.error(`Could not find a GraphQL type for ${target}`, {
                fieldMetadata,
                buildOtions,
                typeOptions,
            });
            throw new Error(`Could not find a GraphQL type for ${target}`);
        }
        return this.typeMapperService.mapToGqlType(gqlType, typeOptions);
    }
};
exports.OutputTypeFactory = OutputTypeFactory;
exports.OutputTypeFactory = OutputTypeFactory = OutputTypeFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [type_mapper_service_1.TypeMapperService,
        type_definitions_storage_1.TypeDefinitionsStorage])
], OutputTypeFactory);
//# sourceMappingURL=output-type.factory.js.map