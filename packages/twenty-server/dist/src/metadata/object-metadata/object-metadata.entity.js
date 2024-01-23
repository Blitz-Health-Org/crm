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
exports.ObjectMetadataEntity = void 0;
const typeorm_1 = require("typeorm");
const field_metadata_entity_1 = require("../field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../relation-metadata/relation-metadata.entity");
const data_source_entity_1 = require("../data-source/data-source.entity");
let ObjectMetadataEntity = class ObjectMetadataEntity {
};
exports.ObjectMetadataEntity = ObjectMetadataEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ObjectMetadataEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], ObjectMetadataEntity.prototype, "dataSourceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ObjectMetadataEntity.prototype, "nameSingular", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ObjectMetadataEntity.prototype, "namePlural", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ObjectMetadataEntity.prototype, "labelSingular", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ObjectMetadataEntity.prototype, "labelPlural", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], ObjectMetadataEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ObjectMetadataEntity.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ObjectMetadataEntity.prototype, "targetTableName", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ObjectMetadataEntity.prototype, "isCustom", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ObjectMetadataEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ObjectMetadataEntity.prototype, "isSystem", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ObjectMetadataEntity.prototype, "labelIdentifierFieldMetadataId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ObjectMetadataEntity.prototype, "imageIdentifierFieldMetadataId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], ObjectMetadataEntity.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => field_metadata_entity_1.FieldMetadataEntity, (field) => field.object, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], ObjectMetadataEntity.prototype, "fields", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => relation_metadata_entity_1.RelationMetadataEntity, (relation) => relation.fromObjectMetadata, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], ObjectMetadataEntity.prototype, "fromRelations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => relation_metadata_entity_1.RelationMetadataEntity, (relation) => relation.toObjectMetadata, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], ObjectMetadataEntity.prototype, "toRelations", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => data_source_entity_1.DataSourceEntity, (dataSource) => dataSource.objects, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", data_source_entity_1.DataSourceEntity)
], ObjectMetadataEntity.prototype, "dataSource", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ObjectMetadataEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ObjectMetadataEntity.prototype, "updatedAt", void 0);
exports.ObjectMetadataEntity = ObjectMetadataEntity = __decorate([
    (0, typeorm_1.Entity)('objectMetadata'),
    (0, typeorm_1.Unique)('IndexOnNameSingularAndWorkspaceIdUnique', [
        'nameSingular',
        'workspaceId',
    ]),
    (0, typeorm_1.Unique)('IndexOnNamePluralAndWorkspaceIdUnique', ['namePlural', 'workspaceId'])
], ObjectMetadataEntity);
//# sourceMappingURL=object-metadata.entity.js.map