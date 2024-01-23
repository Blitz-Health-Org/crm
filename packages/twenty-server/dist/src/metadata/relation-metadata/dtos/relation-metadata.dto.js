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
exports.RelationMetadataDTO = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const object_metadata_dto_1 = require("../../object-metadata/dtos/object-metadata.dto");
const relation_metadata_entity_1 = require("../relation-metadata.entity");
const before_delete_one_field_hook_1 = require("../hooks/before-delete-one-field.hook");
(0, graphql_1.registerEnumType)(relation_metadata_entity_1.RelationMetadataType, {
    name: 'RelationMetadataType',
    description: 'Type of the relation',
});
let RelationMetadataDTO = class RelationMetadataDTO {
};
exports.RelationMetadataDTO = RelationMetadataDTO;
__decorate([
    (0, nestjs_query_graphql_1.IDField)(() => graphql_1.ID),
    __metadata("design:type", String)
], RelationMetadataDTO.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_metadata_entity_1.RelationMetadataType),
    __metadata("design:type", String)
], RelationMetadataDTO.prototype, "relationType", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RelationMetadataDTO.prototype, "fromObjectMetadataId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RelationMetadataDTO.prototype, "toObjectMetadataId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RelationMetadataDTO.prototype, "fromFieldMetadataId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RelationMetadataDTO.prototype, "toFieldMetadataId", void 0);
__decorate([
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], RelationMetadataDTO.prototype, "workspaceId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RelationMetadataDTO.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RelationMetadataDTO.prototype, "updatedAt", void 0);
exports.RelationMetadataDTO = RelationMetadataDTO = __decorate([
    (0, graphql_1.ObjectType)('relation'),
    (0, nestjs_query_graphql_1.Authorize)({
        authorize: (context) => {
            var _a, _b, _c;
            return ({
                workspaceId: { eq: (_c = (_b = (_a = context === null || context === void 0 ? void 0 : context.req) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.workspace) === null || _c === void 0 ? void 0 : _c.id },
            });
        },
    }),
    (0, nestjs_query_graphql_1.QueryOptions)({
        defaultResultSize: 10,
        disableFilter: true,
        disableSort: true,
        maxResultsSize: 1000,
    }),
    (0, nestjs_query_graphql_1.BeforeDeleteOne)(before_delete_one_field_hook_1.BeforeDeleteOneRelation),
    (0, nestjs_query_graphql_1.Relation)('fromObjectMetadata', () => object_metadata_dto_1.ObjectMetadataDTO),
    (0, nestjs_query_graphql_1.Relation)('toObjectMetadata', () => object_metadata_dto_1.ObjectMetadataDTO)
], RelationMetadataDTO);
//# sourceMappingURL=relation-metadata.dto.js.map