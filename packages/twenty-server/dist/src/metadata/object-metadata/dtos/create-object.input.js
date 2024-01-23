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
exports.CreateObjectInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const class_validator_1 = require("class-validator");
const before_create_one_object_hook_1 = require("../hooks/before-create-one-object.hook");
let CreateObjectInput = class CreateObjectInput {
};
exports.CreateObjectInput = CreateObjectInput;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateObjectInput.prototype, "nameSingular", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateObjectInput.prototype, "namePlural", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateObjectInput.prototype, "labelSingular", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateObjectInput.prototype, "labelPlural", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateObjectInput.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateObjectInput.prototype, "icon", void 0);
__decorate([
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], CreateObjectInput.prototype, "dataSourceId", void 0);
__decorate([
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], CreateObjectInput.prototype, "workspaceId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateObjectInput.prototype, "labelIdentifierFieldMetadataId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateObjectInput.prototype, "imageIdentifierFieldMetadataId", void 0);
exports.CreateObjectInput = CreateObjectInput = __decorate([
    (0, graphql_1.InputType)(),
    (0, nestjs_query_graphql_1.BeforeCreateOne)(before_create_one_object_hook_1.BeforeCreateOneObject)
], CreateObjectInput);
//# sourceMappingURL=create-object.input.js.map