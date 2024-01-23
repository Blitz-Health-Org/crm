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
var EdgeTypeFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeTypeFactory = void 0;
const common_1 = require("@nestjs/common");
const type_mapper_service_1 = require("../services/type-mapper.service");
const type_definitions_storage_1 = require("../storages/type-definitions.storage");
const scalars_1 = require("../graphql-types/scalars");
const object_type_definition_factory_1 = require("./object-type-definition.factory");
const edge_type_definition_factory_1 = require("./edge-type-definition.factory");
let EdgeTypeFactory = EdgeTypeFactory_1 = class EdgeTypeFactory {
    constructor(typeMapperService, typeDefinitionsStorage) {
        this.typeMapperService = typeMapperService;
        this.typeDefinitionsStorage = typeDefinitionsStorage;
        this.logger = new common_1.Logger(EdgeTypeFactory_1.name);
    }
    create(objectMetadata, kind, buildOtions, typeOptions) {
        if (kind === edge_type_definition_factory_1.EdgeTypeDefinitionKind.Cursor) {
            return this.typeMapperService.mapToGqlType(scalars_1.CursorScalarType, typeOptions);
        }
        const objectType = this.typeDefinitionsStorage.getObjectTypeByKey(objectMetadata.id, object_type_definition_factory_1.ObjectTypeDefinitionKind.Plain);
        if (!objectType) {
            this.logger.error(`Node type for ${objectMetadata.nameSingular} was not found. Please, check if you have defined it.`, {
                objectMetadata,
                buildOtions,
            });
            throw new Error(`Node type for ${objectMetadata.nameSingular} was not found. Please, check if you have defined it.`);
        }
        return this.typeMapperService.mapToGqlType(objectType, typeOptions);
    }
};
exports.EdgeTypeFactory = EdgeTypeFactory;
exports.EdgeTypeFactory = EdgeTypeFactory = EdgeTypeFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [type_mapper_service_1.TypeMapperService,
        type_definitions_storage_1.TypeDefinitionsStorage])
], EdgeTypeFactory);
//# sourceMappingURL=edge-type.factory.js.map