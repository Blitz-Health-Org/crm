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
exports.ViewFieldObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
const view_object_metadata_1 = require("./view.object-metadata");
let ViewFieldObjectMetadata = class ViewFieldObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.ViewFieldObjectMetadata = ViewFieldObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.UUID,
        label: 'Field Metadata Id',
        description: 'View Field target field',
        icon: 'IconTag',
    }),
    __metadata("design:type", String)
], ViewFieldObjectMetadata.prototype, "fieldMetadataId", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.BOOLEAN,
        label: 'Visible',
        description: 'View Field visibility',
        icon: 'IconEye',
        defaultValue: { value: true },
    }),
    __metadata("design:type", Boolean)
], ViewFieldObjectMetadata.prototype, "isVisible", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.NUMBER,
        label: 'Size',
        description: 'View Field size',
        icon: 'IconEye',
        defaultValue: { value: 0 },
    }),
    __metadata("design:type", Number)
], ViewFieldObjectMetadata.prototype, "size", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.NUMBER,
        label: 'Position',
        description: 'View Field position',
        icon: 'IconList',
        defaultValue: { value: 0 },
    }),
    __metadata("design:type", Number)
], ViewFieldObjectMetadata.prototype, "position", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'View',
        description: 'View Field related view',
        icon: 'IconLayoutCollage',
        joinColumn: 'viewId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", view_object_metadata_1.ViewObjectMetadata)
], ViewFieldObjectMetadata.prototype, "view", void 0);
exports.ViewFieldObjectMetadata = ViewFieldObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'viewFields',
        labelSingular: 'View Field',
        labelPlural: 'View Fields',
        description: '(System) View Fields',
        icon: 'IconTag',
    }),
    (0, is_system_decorator_1.IsSystem)()
], ViewFieldObjectMetadata);
//# sourceMappingURL=view-field.object-metadata.js.map