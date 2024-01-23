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
exports.Workspace = void 0;
const graphql_1 = require("@nestjs/graphql");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const feature_flag_entity_1 = require("../feature-flag/feature-flag.entity");
let Workspace = class Workspace {
};
exports.Workspace = Workspace;
__decorate([
    (0, nestjs_query_graphql_1.IDField)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Workspace.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workspace.prototype, "domainName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workspace.prototype, "displayName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workspace.prototype, "logo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Workspace.prototype, "inviteHash", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Workspace.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp with time zone' }),
    __metadata("design:type", Date)
], Workspace.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp with time zone' }),
    __metadata("design:type", Date)
], Workspace.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.defaultWorkspace),
    __metadata("design:type", Array)
], Workspace.prototype, "users", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Workspace.prototype, "allowImpersonation", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => feature_flag_entity_1.FeatureFlagEntity, (featureFlag) => featureFlag.workspace),
    __metadata("design:type", Array)
], Workspace.prototype, "featureFlags", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: 'incomplete' }),
    __metadata("design:type", String)
], Workspace.prototype, "subscriptionStatus", void 0);
exports.Workspace = Workspace = __decorate([
    (0, typeorm_1.Entity)({ name: 'workspace', schema: 'core' }),
    (0, graphql_1.ObjectType)('Workspace'),
    (0, nestjs_query_graphql_1.UnPagedRelation)('featureFlags', () => feature_flag_entity_1.FeatureFlagEntity, { nullable: true })
], Workspace);
//# sourceMappingURL=workspace.entity.js.map