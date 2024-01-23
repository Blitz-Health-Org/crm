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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMetadataResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const workspace_entity_1 = require("../../core/workspace/workspace.entity");
const auth_workspace_decorator_1 = require("../../decorators/auth-workspace.decorator");
const jwt_auth_guard_1 = require("../../guards/jwt.auth.guard");
const create_field_input_1 = require("./dtos/create-field.input");
const field_metadata_dto_1 = require("./dtos/field-metadata.dto");
const update_field_input_1 = require("./dtos/update-field.input");
const field_metadata_service_1 = require("./field-metadata.service");
let FieldMetadataResolver = class FieldMetadataResolver {
    constructor(fieldMetadataService) {
        this.fieldMetadataService = fieldMetadataService;
    }
    createOneField(input, { id: workspaceId }) {
        return this.fieldMetadataService.createOne(Object.assign(Object.assign({}, input.field), { workspaceId }));
    }
    updateOneField(input, { id: workspaceId }) {
        return this.fieldMetadataService.updateOne(input.id, Object.assign(Object.assign({}, input.update), { workspaceId }));
    }
};
exports.FieldMetadataResolver = FieldMetadataResolver;
__decorate([
    (0, graphql_1.Mutation)(() => field_metadata_dto_1.FieldMetadataDTO),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, auth_workspace_decorator_1.AuthWorkspace)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_field_input_1.CreateOneFieldMetadataInput,
        workspace_entity_1.Workspace]),
    __metadata("design:returntype", void 0)
], FieldMetadataResolver.prototype, "createOneField", null);
__decorate([
    (0, graphql_1.Mutation)(() => field_metadata_dto_1.FieldMetadataDTO),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, auth_workspace_decorator_1.AuthWorkspace)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_field_input_1.UpdateOneFieldMetadataInput,
        workspace_entity_1.Workspace]),
    __metadata("design:returntype", void 0)
], FieldMetadataResolver.prototype, "updateOneField", null);
exports.FieldMetadataResolver = FieldMetadataResolver = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Resolver)(() => field_metadata_dto_1.FieldMetadataDTO),
    __metadata("design:paramtypes", [field_metadata_service_1.FieldMetadataService])
], FieldMetadataResolver);
//# sourceMappingURL=field-metadata.resolver.js.map