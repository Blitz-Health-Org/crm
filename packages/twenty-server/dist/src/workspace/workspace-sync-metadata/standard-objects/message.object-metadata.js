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
exports.MessageObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const gate_decorator_1 = require("../decorators/gate.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const relation_metadata_decorator_1 = require("../decorators/relation-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
const message_thread_object_metadata_1 = require("./message-thread.object-metadata");
let MessageObjectMetadata = class MessageObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.MessageObjectMetadata = MessageObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'External Id',
        description: 'Message id from the messaging provider',
        icon: 'IconHash',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], MessageObjectMetadata.prototype, "externalId", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Header message Id',
        description: 'Message id from the message header',
        icon: 'IconHash',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], MessageObjectMetadata.prototype, "headerMessageId", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Message Thread Id',
        description: 'Message Thread Id',
        icon: 'IconHash',
        joinColumn: 'messageThreadId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", message_thread_object_metadata_1.MessageThreadObjectMetadata)
], MessageObjectMetadata.prototype, "messageThread", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Direction',
        description: 'Direction',
        icon: 'IconDirection',
        defaultValue: { value: 'incoming' },
    }),
    __metadata("design:type", String)
], MessageObjectMetadata.prototype, "direction", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Subject',
        description: 'Subject',
        icon: 'IconMessage',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], MessageObjectMetadata.prototype, "subject", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Body',
        description: 'Body',
        icon: 'IconMessage',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], MessageObjectMetadata.prototype, "body", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.DATE_TIME,
        label: 'Received At',
        description: 'The date the message was received',
        icon: 'IconCalendar',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], MessageObjectMetadata.prototype, "receivedAt", void 0);
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
        inverseSideFieldName: 'message',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], MessageObjectMetadata.prototype, "messageParticipants", void 0);
exports.MessageObjectMetadata = MessageObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'message',
        labelSingular: 'Message',
        labelPlural: 'Messages',
        description: 'Message',
        icon: 'IconMessage',
    }),
    (0, gate_decorator_1.Gate)({
        featureFlag: 'IS_MESSAGING_ENABLED',
    }),
    (0, is_system_decorator_1.IsSystem)()
], MessageObjectMetadata);
//# sourceMappingURL=message.object-metadata.js.map