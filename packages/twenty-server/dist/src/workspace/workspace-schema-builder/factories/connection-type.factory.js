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
var ConnectionTypeFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionTypeFactory = void 0;
const common_1 = require("@nestjs/common");
const type_mapper_service_1 = require("../services/type-mapper.service");
const type_definitions_storage_1 = require("../storages/type-definitions.storage");
const object_1 = require("../graphql-types/object");
const connection_type_definition_factory_1 = require("./connection-type-definition.factory");
let ConnectionTypeFactory = ConnectionTypeFactory_1 = class ConnectionTypeFactory {
    constructor(typeMapperService, typeDefinitionsStorage) {
        this.typeMapperService = typeMapperService;
        this.typeDefinitionsStorage = typeDefinitionsStorage;
        this.logger = new common_1.Logger(ConnectionTypeFactory_1.name);
    }
    create(objectMetadata, kind, buildOtions, typeOptions) {
        if (kind === connection_type_definition_factory_1.ConnectionTypeDefinitionKind.PageInfo) {
            return this.typeMapperService.mapToGqlType(object_1.PageInfoType, typeOptions);
        }
        const edgeType = this.typeDefinitionsStorage.getObjectTypeByKey(objectMetadata.id, kind);
        if (!edgeType) {
            this.logger.error(`Edge type for ${objectMetadata.nameSingular} was not found. Please, check if you have defined it.`, {
                objectMetadata,
                buildOtions,
            });
            throw new Error(`Edge type for ${objectMetadata.nameSingular} was not found. Please, check if you have defined it.`);
        }
        return this.typeMapperService.mapToGqlType(edgeType, typeOptions);
    }
};
exports.ConnectionTypeFactory = ConnectionTypeFactory;
exports.ConnectionTypeFactory = ConnectionTypeFactory = ConnectionTypeFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [type_mapper_service_1.TypeMapperService,
        type_definitions_storage_1.TypeDefinitionsStorage])
], ConnectionTypeFactory);
//# sourceMappingURL=connection-type.factory.js.map