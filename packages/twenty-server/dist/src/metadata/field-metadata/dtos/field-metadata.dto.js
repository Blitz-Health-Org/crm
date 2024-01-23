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
exports.FieldMetadataDTO = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_type_json_1 = require("graphql-type-json");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const class_validator_1 = require("class-validator");
const relation_metadata_dto_1 = require("../../relation-metadata/dtos/relation-metadata.dto");
const field_metadata_entity_1 = require("../field-metadata.entity");
const before_delete_one_field_hook_1 = require("../hooks/before-delete-one-field.hook");
const is_field_metadata_default_value_validator_1 = require("../validators/is-field-metadata-default-value.validator");
const is_field_metadata_options_validator_1 = require("../validators/is-field-metadata-options.validator");
(0, graphql_1.registerEnumType)(field_metadata_entity_1.FieldMetadataType, {
    name: 'FieldMetadataType',
    description: 'Type of the field',
});
let FieldMetadataDTO = class FieldMetadataDTO {
};
exports.FieldMetadataDTO = FieldMetadataDTO;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, nestjs_query_graphql_1.IDField)(() => graphql_1.ID),
    __metadata("design:type", String)
], FieldMetadataDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(field_metadata_entity_1.FieldMetadataType),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => field_metadata_entity_1.FieldMetadataType),
    __metadata("design:type", String)
], FieldMetadataDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], FieldMetadataDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], FieldMetadataDTO.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], FieldMetadataDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], FieldMetadataDTO.prototype, "icon", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, nestjs_query_graphql_1.FilterableField)({ nullable: true }),
    __metadata("design:type", Boolean)
], FieldMetadataDTO.prototype, "isCustom", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, nestjs_query_graphql_1.FilterableField)({ nullable: true }),
    __metadata("design:type", Boolean)
], FieldMetadataDTO.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, nestjs_query_graphql_1.FilterableField)({ nullable: true }),
    __metadata("design:type", Boolean)
], FieldMetadataDTO.prototype, "isSystem", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], FieldMetadataDTO.prototype, "isNullable", void 0);
__decorate([
    (0, class_validator_1.Validate)(is_field_metadata_default_value_validator_1.IsFieldMetadataDefaultValue),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], FieldMetadataDTO.prototype, "defaultValue", void 0);
__decorate([
    (0, class_validator_1.Validate)(is_field_metadata_options_validator_1.IsFieldMetadataOptions),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], FieldMetadataDTO.prototype, "options", void 0);
__decorate([
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], FieldMetadataDTO.prototype, "workspaceId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], FieldMetadataDTO.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], FieldMetadataDTO.prototype, "updatedAt", void 0);
exports.FieldMetadataDTO = FieldMetadataDTO = __decorate([
    (0, graphql_1.ObjectType)('field'),
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
    (0, nestjs_query_graphql_1.BeforeDeleteOne)(before_delete_one_field_hook_1.BeforeDeleteOneField),
    (0, nestjs_query_graphql_1.Relation)('toRelationMetadata', () => relation_metadata_dto_1.RelationMetadataDTO, {
        nullable: true,
    }),
    (0, nestjs_query_graphql_1.Relation)('fromRelationMetadata', () => relation_metadata_dto_1.RelationMetadataDTO, {
        nullable: true,
    })
], FieldMetadataDTO);
//# sourceMappingURL=field-metadata.dto.js.map