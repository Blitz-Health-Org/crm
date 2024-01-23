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
exports.MessageChannelObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const gate_decorator_1 = require("../decorators/gate.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const relation_metadata_decorator_1 = require("../decorators/relation-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
const connected_account_object_metadata_1 = require("./connected-account.object-metadata");
let MessageChannelObjectMetadata = class MessageChannelObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.MessageChannelObjectMetadata = MessageChannelObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Visibility',
        description: 'Visibility',
        icon: 'IconEyeglass',
        defaultValue: { value: 'metadata' },
    }),
    __metadata("design:type", String)
], MessageChannelObjectMetadata.prototype, "visibility", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Handle',
        description: 'Handle',
        icon: 'IconAt',
    }),
    __metadata("design:type", String)
], MessageChannelObjectMetadata.prototype, "handle", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Connected Account',
        description: 'Connected Account',
        icon: 'IconUserCircle',
        joinColumn: 'connectedAccountId',
    }),
    __metadata("design:type", connected_account_object_metadata_1.ConnectedAccountObjectMetadata)
], MessageChannelObjectMetadata.prototype, "connectedAccount", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Type',
        description: 'Type',
        icon: 'IconMessage',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", String)
], MessageChannelObjectMetadata.prototype, "type", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'Message Threads',
        description: 'Threads from the channel.',
        icon: 'IconMessage',
    }),
    (0, relation_metadata_decorator_1.RelationMetadata)({
        type: relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY,
        objectName: 'messageThread',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Array)
], MessageChannelObjectMetadata.prototype, "messageThreads", void 0);
exports.MessageChannelObjectMetadata = MessageChannelObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'messageChannels',
        labelSingular: 'Message Channel',
        labelPlural: 'Message Channels',
        description: 'Message Channels',
        icon: 'IconMessage',
    }),
    (0, gate_decorator_1.Gate)({
        featureFlag: 'IS_MESSAGING_ENABLED',
    }),
    (0, is_system_decorator_1.IsSystem)()
], MessageChannelObjectMetadata);
//# sourceMappingURL=message-channel.object-metadata.js.map