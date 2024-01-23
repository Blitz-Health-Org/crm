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
exports.MessageParticipantObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const gate_decorator_1 = require("../decorators/gate.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
const message_object_metadata_1 = require("./message.object-metadata");
const person_object_metadata_1 = require("./person.object-metadata");
const workspace_member_object_metadata_1 = require("./workspace-member.object-metadata");
let MessageParticipantObjectMetadata = class MessageParticipantObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.MessageParticipantObjectMetadata = MessageParticipantObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Message',
        description: 'Message',
        icon: 'IconMessage',
        joinColumn: 'messageId',
    }),
    __metadata("design:type", message_object_metadata_1.MessageObjectMetadata)
], MessageParticipantObjectMetadata.prototype, "message", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.SELECT,
        label: 'Role',
        description: 'Role',
        icon: 'IconAt',
        options: [
            { value: 'from', label: 'From', position: 0, color: 'green' },
            { value: 'to', label: 'To', position: 1, color: 'blue' },
            { value: 'cc', label: 'Cc', position: 2, color: 'orange' },
            { value: 'bcc', label: 'Bcc', position: 3, color: 'red' },
        ],
        defaultValue: { value: 'from' },
    }),
    __metadata("design:type", String)
], MessageParticipantObjectMetadata.prototype, "role", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Handle',
        description: 'Handle',
        icon: 'IconAt',
    }),
    __metadata("design:type", String)
], MessageParticipantObjectMetadata.prototype, "handle", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Display Name',
        description: 'Display Name',
        icon: 'IconUser',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], MessageParticipantObjectMetadata.prototype, "displayName", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Person',
        description: 'Person',
        icon: 'IconUser',
        joinColumn: 'personId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", person_object_metadata_1.PersonObjectMetadata)
], MessageParticipantObjectMetadata.prototype, "person", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Workspace Member',
        description: 'Workspace member',
        icon: 'IconCircleUser',
        joinColumn: 'workspaceMemberId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", workspace_member_object_metadata_1.WorkspaceMemberObjectMetadata)
], MessageParticipantObjectMetadata.prototype, "workspaceMember", void 0);
exports.MessageParticipantObjectMetadata = MessageParticipantObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'messageParticipants',
        labelSingular: 'Message Participant',
        labelPlural: 'Message Participants',
        description: 'Message Participants',
        icon: 'IconUserCircle',
    }),
    (0, gate_decorator_1.Gate)({
        featureFlag: 'IS_MESSAGING_ENABLED',
    }),
    (0, is_system_decorator_1.IsSystem)()
], MessageParticipantObjectMetadata);
//# sourceMappingURL=message-participant.object-metadata.js.map