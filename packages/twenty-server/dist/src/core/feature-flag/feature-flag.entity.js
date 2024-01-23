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
exports.FeatureFlagEntity = exports.FeatureFlagKeys = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const workspace_entity_1 = require("../workspace/workspace.entity");
var FeatureFlagKeys;
(function (FeatureFlagKeys) {
    FeatureFlagKeys["IsRelationFieldTypeEnabled"] = "IS_RELATION_FIELD_TYPE_ENABLED";
    FeatureFlagKeys["IsMessagingEnabled"] = "IS_MESSAGING_ENABLED";
    FeatureFlagKeys["IsSelectFieldTypeEnabled"] = "IS_SELECT_FIELD_TYPE_ENABLED";
    FeatureFlagKeys["IsRatingFieldTypeEnabled"] = "IS_RATING_FIELD_TYPE_ENABLED";
    FeatureFlagKeys["IsWorkspaceCleanable"] = "IS_WORKSPACE_CLEANABLE";
})(FeatureFlagKeys || (exports.FeatureFlagKeys = FeatureFlagKeys = {}));
let FeatureFlagEntity = class FeatureFlagEntity {
};
exports.FeatureFlagEntity = FeatureFlagEntity;
__decorate([
    (0, nestjs_query_graphql_1.IDField)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FeatureFlagEntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ nullable: false, type: 'text' }),
    __metadata("design:type", String)
], FeatureFlagEntity.prototype, "key", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], FeatureFlagEntity.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workspace_entity_1.Workspace, (workspace) => workspace.featureFlags, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", workspace_entity_1.Workspace)
], FeatureFlagEntity.prototype, "workspace", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Boolean)
], FeatureFlagEntity.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FeatureFlagEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FeatureFlagEntity.prototype, "updatedAt", void 0);
exports.FeatureFlagEntity = FeatureFlagEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'featureFlag', schema: 'core' }),
    (0, graphql_1.ObjectType)('FeatureFlag'),
    (0, typeorm_1.Unique)('IndexOnKeyAndWorkspaceIdUnique', ['key', 'workspaceId'])
], FeatureFlagEntity);
//# sourceMappingURL=feature-flag.entity.js.map