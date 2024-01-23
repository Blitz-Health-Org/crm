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
exports.BaseObjectMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const field_metadata_decorator_1 = require("../decorators/field-metadata.decorator");
const is_system_decorator_1 = require("../decorators/is-system.decorator");
class BaseObjectMetadata {
}
exports.BaseObjectMetadata = BaseObjectMetadata;
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.UUID,
        label: 'Id',
        defaultValue: { type: 'uuid' },
    }),
    (0, is_system_decorator_1.IsSystem)(),
    __metadata("design:type", String)
], BaseObjectMetadata.prototype, "id", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.DATE_TIME,
        label: 'Creation date',
        icon: 'IconCalendar',
        defaultValue: { type: 'now' },
    }),
    __metadata("design:type", Date)
], BaseObjectMetadata.prototype, "createdAt", void 0);
__decorate([
    (0, field_metadata_decorator_1.FieldMetadata)({
        type: field_metadata_entity_1.FieldMetadataType.DATE_TIME,
        label: 'Update date',
        icon: 'IconCalendar',
        defaultValue: { type: 'now' },
    }),
    (0, is_system_decorator_1.IsSystem)(),
    __metadata("design:type", Date)
], BaseObjectMetadata.prototype, "updatedAt", void 0);
//# sourceMappingURL=base.object-metadata.js.map