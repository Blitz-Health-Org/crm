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
exports.CreateRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const class_validator_1 = require("class-validator");
const before_create_one_relation_hook_1 = require("../hooks/before-create-one-relation.hook");
const relation_metadata_entity_1 = require("../relation-metadata.entity");
let CreateRelationInput = class CreateRelationInput {
};
exports.CreateRelationInput = CreateRelationInput;
__decorate([
    (0, class_validator_1.IsEnum)(relation_metadata_entity_1.RelationMetadataType),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => relation_metadata_entity_1.RelationMetadataType),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "relationType", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "fromObjectMetadataId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "toObjectMetadataId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "fromName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "toName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "fromLabel", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "toLabel", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "fromIcon", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "toIcon", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true, deprecationReason: 'Use fromDescription instead' }),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "fromDescription", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "toDescription", void 0);
__decorate([
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], CreateRelationInput.prototype, "workspaceId", void 0);
exports.CreateRelationInput = CreateRelationInput = __decorate([
    (0, graphql_1.InputType)(),
    (0, nestjs_query_graphql_1.BeforeCreateOne)(before_create_one_relation_hook_1.BeforeCreateOneRelation)
], CreateRelationInput);
//# sourceMappingURL=create-relation.input.js.map