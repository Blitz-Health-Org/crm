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
exports.FieldMetadataEntity = exports.FieldMetadataType = void 0;
const typeorm_1 = require("typeorm");
const object_metadata_entity_1 = require("../object-metadata/object-metadata.entity");
const relation_metadata_entity_1 = require("../relation-metadata/relation-metadata.entity");
var FieldMetadataType;
(function (FieldMetadataType) {
    FieldMetadataType["UUID"] = "UUID";
    FieldMetadataType["TEXT"] = "TEXT";
    FieldMetadataType["PHONE"] = "PHONE";
    FieldMetadataType["EMAIL"] = "EMAIL";
    FieldMetadataType["DATE_TIME"] = "DATE_TIME";
    FieldMetadataType["BOOLEAN"] = "BOOLEAN";
    FieldMetadataType["NUMBER"] = "NUMBER";
    FieldMetadataType["NUMERIC"] = "NUMERIC";
    FieldMetadataType["PROBABILITY"] = "PROBABILITY";
    FieldMetadataType["LINK"] = "LINK";
    FieldMetadataType["CURRENCY"] = "CURRENCY";
    FieldMetadataType["FULL_NAME"] = "FULL_NAME";
    FieldMetadataType["RATING"] = "RATING";
    FieldMetadataType["SELECT"] = "SELECT";
    FieldMetadataType["MULTI_SELECT"] = "MULTI_SELECT";
    FieldMetadataType["RELATION"] = "RELATION";
})(FieldMetadataType || (exports.FieldMetadataType = FieldMetadataType = {}));
let FieldMetadataEntity = class FieldMetadataEntity {
};
exports.FieldMetadataEntity = FieldMetadataEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FieldMetadataEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], FieldMetadataEntity.prototype, "objectMetadataId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => object_metadata_entity_1.ObjectMetadataEntity, (object) => object.fields, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'objectMetadataId' }),
    __metadata("design:type", object_metadata_entity_1.ObjectMetadataEntity)
], FieldMetadataEntity.prototype, "object", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], FieldMetadataEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], FieldMetadataEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], FieldMetadataEntity.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'jsonb' }),
    __metadata("design:type", Object)
], FieldMetadataEntity.prototype, "targetColumnMap", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'jsonb' }),
    __metadata("design:type", Object)
], FieldMetadataEntity.prototype, "defaultValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], FieldMetadataEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FieldMetadataEntity.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: true }),
    __metadata("design:type", Object)
], FieldMetadataEntity.prototype, "options", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FieldMetadataEntity.prototype, "isCustom", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FieldMetadataEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FieldMetadataEntity.prototype, "isSystem", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: true }),
    __metadata("design:type", Boolean)
], FieldMetadataEntity.prototype, "isNullable", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], FieldMetadataEntity.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => relation_metadata_entity_1.RelationMetadataEntity, (relation) => relation.fromFieldMetadata),
    __metadata("design:type", relation_metadata_entity_1.RelationMetadataEntity)
], FieldMetadataEntity.prototype, "fromRelationMetadata", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => relation_metadata_entity_1.RelationMetadataEntity, (relation) => relation.toFieldMetadata),
    __metadata("design:type", relation_metadata_entity_1.RelationMetadataEntity)
], FieldMetadataEntity.prototype, "toRelationMetadata", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FieldMetadataEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FieldMetadataEntity.prototype, "updatedAt", void 0);
exports.FieldMetadataEntity = FieldMetadataEntity = __decorate([
    (0, typeorm_1.Entity)('fieldMetadata'),
    (0, typeorm_1.Unique)('IndexOnNameObjectMetadataIdAndWorkspaceIdUnique', [
        'name',
        'objectMetadataId',
        'workspaceId',
    ])
], FieldMetadataEntity);
//# sourceMappingURL=field-metadata.entity.js.map