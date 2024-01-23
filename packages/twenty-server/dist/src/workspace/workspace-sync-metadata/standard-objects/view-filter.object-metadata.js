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
exports.ViewFilterObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const is_nullable_decorator_1 = require("../decorators/is-nullable.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
const object_metadata_decorator_1 = require("../decorators/object-metadata.decorator");
const base_object_metadata_1 = require("./base.object-metadata");
const view_object_metadata_1 = require("./view.object-metadata");
let ViewFilterObjectMetadata = class ViewFilterObjectMetadata extends base_object_metadata_1.BaseObjectMetadata {
};
exports.ViewFilterObjectMetadata = ViewFilterObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.UUID,
        label: 'Field Metadata Id',
        description: 'View Filter target field',
    }),
    __metadata("design:type", String)
], ViewFilterObjectMetadata.prototype, "fieldMetadataId", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Operand',
        description: 'View Filter operand',
        defaultValue: { value: 'Contains' },
    }),
    __metadata("design:type", String)
], ViewFilterObjectMetadata.prototype, "operand", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Value',
        description: 'View Filter value',
        defaultValue: { value: '' },
    }),
    __metadata("design:type", String)
], ViewFilterObjectMetadata.prototype, "value", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.TEXT,
        label: 'Display Value',
        description: 'View Filter Display Value',
        defaultValue: { value: '' },
    }),
    __metadata("design:type", String)
], ViewFilterObjectMetadata.prototype, "displayValue", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.RELATION,
        label: 'View',
        description: 'View Filter related view',
        icon: 'IconLayoutCollage',
        joinColumn: 'viewId',
    }),
    (0, is_nullable_decorator_1.IsNullable)(),
    __metadata("design:type", view_object_metadata_1.ViewObjectMetadata)
], ViewFilterObjectMetadata.prototype, "view", void 0);
exports.ViewFilterObjectMetadata = ViewFilterObjectMetadata = __decorate([
    (0, object_metadata_decorator_1.ObjectMetadata)({
        namePlural: 'viewFilters',
        labelSingular: 'View Filter',
        labelPlural: 'View Filters',
        description: '(System) View Filters',
        icon: 'IconFilterBolt',
    }),
    (0, is_system_decorator_1.IsSystem)()
], ViewFilterObjectMetadata);
//# sourceMappingURL=view-filter.object-metadata.js.map