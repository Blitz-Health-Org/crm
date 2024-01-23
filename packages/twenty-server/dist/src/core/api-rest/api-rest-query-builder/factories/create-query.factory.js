"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQueryFactory = void 0;
const common_1 = require("@nestjs/common");
const capitalize_1 = require("../../../../utils/capitalize");
const map_field_metadata_to_graphql_query_utils_1 = require("../utils/map-field-metadata-to-graphql-query.utils");
let CreateQueryFactory = class CreateQueryFactory {
    create(objectMetadata, depth) {
        const objectNameSingular = (0, capitalize_1.capitalize)(objectMetadata.objectMetadataItem.nameSingular);
        return `
      mutation Create${objectNameSingular}($data: ${objectNameSingular}CreateInput!) {
        create${objectNameSingular}(data: $data) {
          id
          ${objectMetadata.objectMetadataItem.fields
            .map((field) => (0, map_field_metadata_to_graphql_query_utils_1.mapFieldMetadataToGraphqlQuery)(objectMetadata.objectMetadataItems, field, depth))
            .join('\n')}
        }
      }
    `;
    }
};
exports.CreateQueryFactory = CreateQueryFactory;
exports.CreateQueryFactory = CreateQueryFactory = __decorate([
    (0, common_1.Injectable)()
], CreateQueryFactory);
//# sourceMappingURL=create-query.factory.js.map