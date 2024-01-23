"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQueryFactory = void 0;
const common_1 = require("@nestjs/common");
const capitalize_1 = require("../../../../utils/capitalize");
const map_field_metadata_to_graphql_query_utils_1 = require("../utils/map-field-metadata-to-graphql-query.utils");
let UpdateQueryFactory = class UpdateQueryFactory {
    create(objectMetadata, depth) {
        const objectNameSingular = objectMetadata.objectMetadataItem.nameSingular;
        return `
      mutation Update${(0, capitalize_1.capitalize)(objectNameSingular)}($id: ID!, $data: ${(0, capitalize_1.capitalize)(objectNameSingular)}UpdateInput!) {
        update${(0, capitalize_1.capitalize)(objectNameSingular)}(id: $id, data: $data) {
          id
          ${objectMetadata.objectMetadataItem.fields
            .map((field) => (0, map_field_metadata_to_graphql_query_utils_1.mapFieldMetadataToGraphqlQuery)(objectMetadata.objectMetadataItems, field, depth))
            .join('\n')}
        }
      }
    `;
    }
};
exports.UpdateQueryFactory = UpdateQueryFactory;
exports.UpdateQueryFactory = UpdateQueryFactory = __decorate([
    (0, common_1.Injectable)()
], UpdateQueryFactory);
//# sourceMappingURL=update-query.factory.js.map