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
exports.WorkspaceMemberObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const gate_decorator_1 = require("../decorators/gate.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const relation_metadata_decorator_1 = require("../decorators/relation-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
let WorkspaceMemberObjectMetadata = class WorkspaceMemberObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.WorkspaceMemberObjectMetadata = WorkspaceMemberObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.FULL_NAME,
        label: 'Name',
        description: 'Workspace member name',
        icon: 'IconCircleUser',
    }),
    __metadata("design:type", Object)
], WorkspaceMemberObjectMetadata.prototype, "name", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Color Scheme',
        description: 'Preferred color scheme',
        icon: 'IconColorSwatch',
        defaultValue: { value: 'Light' },
    }),
    __metadata("design:type", String)
], WorkspaceMemberObjectMetadata.prototype, "colorScheme", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Language',
        description: 'Preferred language',
        icon: 'IconLanguage',
        defaultValue: { value: 'en' },
    }),
    __metadata("design:type", String)
], WorkspaceMemberObjectMetadata.prototype, "locale", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Avatar Url',
        description: 'Workspace member avatar',
        icon: 'IconFileUpload',
    }),
    __metadata("design:type", String)
], WorkspaceMemberObjectMetadata.prototype, "avatarUrl", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'User Email',
        description: 'Related user email address',
        icon: 'IconMail',
    }),
    __metadata("design:type", String)
], WorkspaceMemberObjectMetadata.prototype, "userEmail", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.UUID,
        label: 'User Id',
        description: 'Associated User Id',
        icon: 'IconCircleUsers',
    }),
    __metadata("design:type", String)
], WorkspaceMemberObjectMetadata.prototype, "userId", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Authored activities',
        description: 'Activities created by the workspace member',
        icon: 'IconCheckbox',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'activity',
        inverseSideFieldName: 'author',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], WorkspaceMemberObjectMetadata.prototype, "authoredActivities", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Assigned activities',
        description: 'Activities assigned to the workspace member',
        icon: 'IconCheckbox',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'activity',
        inverseSideFieldName: 'assignee',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], WorkspaceMemberObjectMetadata.prototype, "assignedActivities", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Favorites',
        description: 'Favorites linked to the workspace member',
        icon: 'IconHeart',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'favorite',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], WorkspaceMemberObjectMetadata.prototype, "favorites", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Account Owner For Companies',
        description: 'Account owner for companies',
        icon: 'IconBriefcase',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'company',
        inverseSideFieldName: 'accountOwner',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], WorkspaceMemberObjectMetadata.prototype, "accountOwnerForCompanies", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Authored attachments',
        description: 'Attachments created by the workspace member',
        icon: 'IconFileImport',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'attachment',
        inverseSideFieldName: 'author',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], WorkspaceMemberObjectMetadata.prototype, "authoredAttachments", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Authored comments',
        description: 'Authored comments',
        icon: 'IconComment',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'comment',
        inverseSideFieldName: 'author',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], WorkspaceMemberObjectMetadata.prototype, "authoredComments", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Connected accounts',
        description: 'Connected accounts',
        icon: 'IconAt',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'connectedAccount',
        inverseSideFieldName: 'accountOwner',
    }),
    (0, gate_decorator_1.Gate)({
        featureFlag: 'IS_MESSAGING_ENABLED',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], WorkspaceMemberObjectMetadata.prototype, "connectedAccounts", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Message Participants',
        description: 'Message Participants',
        icon: 'IconUserCircle',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'messageParticipant',
        inverseSideFieldName: 'workspaceMember',
    }),
    (0, gate_decorator_1.Gate)({
        featureFlag: 'IS_MESSAGING_ENABLED',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], WorkspaceMemberObjectMetadata.prototype, "messageParticipants", void 0);
exports.WorkspaceMemberObjectMetadata = WorkspaceMemberObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'workspaceMembers',
        labelSingular: 'Workspace Member',
        labelPlural: 'Workspace Members',
        description: 'A workspace member',
        icon: 'IconUserCircle',
    }),
    (0, is_system_decorator_1.IsSystem)()
], WorkspaceMemberObjectMetadata);
//# sourceMappingURL=workspace-member.object-metadata.js.map