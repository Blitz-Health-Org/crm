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
exports.RelationMetadataEntity = exports.RelationMetadataType = void 0;
const typeorm_1 = require("typeorm");
const field_metadata_entity_1 = require("../field-metadata/field-metadata.entity");
const object_metadata_entity_1 = require("../object-metadata/object-metadata.entity");
var RelationMetadataType;
(function (RelationMetadataType) {
    RelationMetadataType["ONE_TO_ONE"] = "ONE_TO_ONE";
    RelationMetadataType["ONE_TO_MANY"] = "ONE_TO_MANY";
    RelationMetadataType["MANY_TO_MANY"] = "MANY_TO_MANY";
})(RelationMetadataType || (exports.RelationMetadataType = RelationMetadataType = {}));
let RelationMetadataEntity = class RelationMetadataEntity {
};
exports.RelationMetadataEntity = RelationMetadataEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RelationMetadataEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], RelationMetadataEntity.prototype, "relationType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], RelationMetadataEntity.prototype, "fromObjectMetadataId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], RelationMetadataEntity.prototype, "toObjectMetadataId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], RelationMetadataEntity.prototype, "fromFieldMetadataId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], RelationMetadataEntity.prototype, "toFieldMetadataId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], RelationMetadataEntity.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => object_metadata_entity_1.ObjectMetadataEntity, (object) => object.fromRelations, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", object_metadata_entity_1.ObjectMetadataEntity)
], RelationMetadataEntity.prototype, "fromObjectMetadata", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => object_metadata_entity_1.ObjectMetadataEntity, (object) => object.toRelations, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", object_metadata_entity_1.ObjectMetadataEntity)
], RelationMetadataEntity.prototype, "toObjectMetadata", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => field_metadata_entity_1.FieldMetadataEntity, (field) => field.fromRelationMetadata),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", field_metadata_entity_1.FieldMetadataEntity)
], RelationMetadataEntity.prototype, "fromFieldMetadata", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => field_metadata_entity_1.FieldMetadataEntity, (field) => field.toRelationMetadata),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", field_metadata_entity_1.FieldMetadataEntity)
], RelationMetadataEntity.prototype, "toFieldMetadata", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RelationMetadataEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RelationMetadataEntity.prototype, "updatedAt", void 0);
exports.RelationMetadataEntity = RelationMetadataEntity = __decorate([
    (0, typeorm_1.Entity)('relationMetadata')
], RelationMetadataEntity);
//# sourceMappingURL=relation-metadata.entity.js.map