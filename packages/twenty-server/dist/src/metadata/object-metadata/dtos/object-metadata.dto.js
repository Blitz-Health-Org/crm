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
exports.ObjectMetadataDTO = void 0;
const graphql_1 = require("@nestjs/graphql");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const field_metadata_dto_1 = require("../../field-metadata/dtos/field-metadata.dto");
const before_delete_one_object_hook_1 = require("../hooks/before-delete-one-object.hook");
let ObjectMetadataDTO = class ObjectMetadataDTO {
};
exports.ObjectMetadataDTO = ObjectMetadataDTO;
__decorate([
    (0, nestjs_query_graphql_1.IDField)(() => graphql_1.ID),
    __metadata("design:type", String)
], ObjectMetadataDTO.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ObjectMetadataDTO.prototype, "dataSourceId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ObjectMetadataDTO.prototype, "nameSingular", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ObjectMetadataDTO.prototype, "namePlural", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ObjectMetadataDTO.prototype, "labelSingular", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ObjectMetadataDTO.prototype, "labelPlural", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ObjectMetadataDTO.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ObjectMetadataDTO.prototype, "icon", void 0);
__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(),
    __metadata("design:type", Boolean)
], ObjectMetadataDTO.prototype, "isCustom", void 0);
__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(),
    __metadata("design:type", Boolean)
], ObjectMetadataDTO.prototype, "isActive", void 0);
__decorate([
    (0, nestjs_query_graphql_1.FilterableField)(),
    __metadata("design:type", Boolean)
], ObjectMetadataDTO.prototype, "isSystem", void 0);
__decorate([
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], ObjectMetadataDTO.prototype, "workspaceId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ObjectMetadataDTO.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ObjectMetadataDTO.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ObjectMetadataDTO.prototype, "labelIdentifierFieldMetadataId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ObjectMetadataDTO.prototype, "imageIdentifierFieldMetadataId", void 0);
exports.ObjectMetadataDTO = ObjectMetadataDTO = __decorate([
    (0, graphql_1.ObjectType)('object'),
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
        disableSort: true,
        maxResultsSize: 1000,
    }),
    (0, nestjs_query_graphql_1.BeforeDeleteOne)(before_delete_one_object_hook_1.BeforeDeleteOneObject),
    (0, nestjs_query_graphql_1.CursorConnection)('fields', () => field_metadata_dto_1.FieldMetadataDTO)
], ObjectMetadataDTO);
//# sourceMappingURL=object-metadata.dto.js.map