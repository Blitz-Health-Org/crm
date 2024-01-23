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
exports.ConnectedAccountObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const gate_decorator_1 = require("../decorators/gate.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const relation_metadata_decorator_1 = require("../decorators/relation-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
const workspace_member_object_metadata_1 = require("./workspace-member.object-metadata");
let ConnectedAccountObjectMetadata = class ConnectedAccountObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.ConnectedAccountObjectMetadata = ConnectedAccountObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'handle',
        description: 'The account handle (email, username, phone number, etc.)',
        icon: 'IconMail',
    }),
    __metadata("design:type", String)
], ConnectedAccountObjectMetadata.prototype, "handle", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'provider',
        description: 'The account provider',
        icon: 'IconSettings',
    }),
    __metadata("design:type", String)
], ConnectedAccountObjectMetadata.prototype, "provider", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Access Token',
        description: 'Messaging provider access token',
        icon: 'IconKey',
    }),
    __metadata("design:type", String)
], ConnectedAccountObjectMetadata.prototype, "accessToken", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Refresh Token',
        description: 'Messaging provider refresh token',
        icon: 'IconKey',
    }),
    __metadata("design:type", String)
], ConnectedAccountObjectMetadata.prototype, "refreshToken", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Account Owner',
        description: 'Account Owner',
        icon: 'IconUserCircle',
        joinColumn: 'accountOwnerId',
    }),
    __metadata("design:type", workspace_member_object_metadata_1.WorkspaceMemberObjectMetadata)
], ConnectedAccountObjectMetadata.prototype, "accountOwner", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Last sync history ID',
        description: 'Last sync history ID',
        icon: 'IconHistory',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], ConnectedAccountObjectMetadata.prototype, "lastSyncHistoryId", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Message Channel',
        description: 'Message Channel',
        icon: 'IconMessage',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'messageChannel',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], ConnectedAccountObjectMetadata.prototype, "messageChannels", void 0);
exports.ConnectedAccountObjectMetadata = ConnectedAccountObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'connectedAccounts',
        labelSingular: 'Connected Account',
        labelPlural: 'Connected Accounts',
        description: 'A connected account',
        icon: 'IconAt',
    }),
    (0, gate_decorator_1.Gate)({
        featureFlag: 'IS_MESSAGING_ENABLED',
    }),
    (0, is_system_decorator_1.IsSystem)()
], ConnectedAccountObjectMetadata);
//# sourceMappingURL=connected-account.object-metadata.js.map