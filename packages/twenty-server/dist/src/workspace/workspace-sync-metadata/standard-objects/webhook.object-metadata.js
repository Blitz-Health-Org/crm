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
exports.WebhookObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
let WebhookObjectMetadata = class WebhookObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.WebhookObjectMetadata = WebhookObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Target Url',
        description: 'Webhook target url',
        icon: 'IconLink',
    }),
    __metadata("design:type", String)
], WebhookObjectMetadata.prototype, "targetUrl", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Operation',
        description: 'Webhook operation',
        icon: 'IconCheckbox',
    }),
    __metadata("design:type", String)
], WebhookObjectMetadata.prototype, "operation", void 0);
exports.WebhookObjectMetadata = WebhookObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'webhooks',
        labelSingular: 'Webhook',
        labelPlural: 'Webhooks',
        description: 'A webhook',
        icon: 'IconRobot',
    }),
    (0, is_system_decorator_1.IsSystem)()
], WebhookObjectMetadata);
//# sourceMappingURL=webhook.object-metadata.js.map