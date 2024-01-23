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
exports.ApiKeyObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
let ApiKeyObjectMetadata = class ApiKeyObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.ApiKeyObjectMetadata = ApiKeyObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Name',
        description: 'ApiKey name',
        icon: 'IconLink',
        defaultValue: { value: '' },
    }),
    __metadata("design:type", String)
], ApiKeyObjectMetadata.prototype, "name", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.DATE_TIME,
        label: 'Expiration date',
        description: 'ApiKey expiration date',
        icon: 'IconCalendar',
    }),
    __metadata("design:type", Date)
], ApiKeyObjectMetadata.prototype, "expiresAt", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.DATE_TIME,
        label: 'Revocation date',
        description: 'ApiKey revocation date',
        icon: 'IconCalendar',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", Date)
], ApiKeyObjectMetadata.prototype, "revokedAt", void 0);
exports.ApiKeyObjectMetadata = ApiKeyObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'apiKeys',
        labelSingular: 'Api Key',
        labelPlural: 'Api Keys',
        description: 'An api key',
        icon: 'IconRobot',
    }),
    (0, is_system_decorator_1.IsSystem)()
], ApiKeyObjectMetadata);
//# sourceMappingURL=api-key.object-metadata.js.map