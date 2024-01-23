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
var RelationTypeFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationTypeFactory = void 0;
const common_1 = require("@nestjs/common");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const type_definitions_storage_1 = require("../storages/type-definitions.storage");
const deduce_relation_direction_util_1 = require("../../utils/deduce-relation-direction.util");
const object_type_definition_factory_1 = require("./object-type-definition.factory");
let RelationTypeFactory = RelationTypeFactory_1 = class RelationTypeFactory {
    constructor(typeDefinitionsStorage) {
        this.typeDefinitionsStorage = typeDefinitionsStorage;
        this.logger = new common_1.Logger(RelationTypeFactory_1.name);
    }
    create(fieldMetadata, relationMetadata, relationDirection) {
        let relationQqlType = undefined;
        if (relationDirection === deduce_relation_direction_util_1.RelationDirection.FROM &&
            relationMetadata.relationType === relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY) {
            relationQqlType = this.typeDefinitionsStorage.getObjectTypeByKey(relationMetadata.toObjectMetadataId, object_type_definition_factory_1.ObjectTypeDefinitionKind.Connection);
        }
        else {
            const relationObjectId = relationDirection === deduce_relation_direction_util_1.RelationDirection.FROM
                ? relationMetadata.toObjectMetadataId
                : relationMetadata.fromObjectMetadataId;
            relationQqlType = this.typeDefinitionsStorage.getObjectTypeByKey(relationObjectId, object_type_definition_factory_1.ObjectTypeDefinitionKind.Plain);
        }
        if (!relationQqlType) {
            this.logger.error(`Could not find a relation type for ${fieldMetadata.id}`, {
                fieldMetadata,
            });
            throw new Error(`Could not find a relation type for ${fieldMetadata.id}`);
        }
        return relationQqlType;
    }
};
exports.RelationTypeFactory = RelationTypeFactory;
exports.RelationTypeFactory = RelationTypeFactory = RelationTypeFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [type_definitions_storage_1.TypeDefinitionsStorage])
], RelationTypeFactory);
//# sourceMappingURL=relation-type.factory.js.map