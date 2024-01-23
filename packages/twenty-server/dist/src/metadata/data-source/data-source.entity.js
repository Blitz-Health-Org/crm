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
exports.DataSourceEntity = void 0;
const typeorm_1 = require("typeorm");
const object_metadata_entity_1 = require("../object-metadata/object-metadata.entity");
let DataSourceEntity = class DataSourceEntity {
};
exports.DataSourceEntity = DataSourceEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DataSourceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DataSourceEntity.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DataSourceEntity.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DataSourceEntity.prototype, "schema", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['postgres'], default: 'postgres' }),
    __metadata("design:type", String)
], DataSourceEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], DataSourceEntity.prototype, "isRemote", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => object_metadata_entity_1.ObjectMetadataEntity, (object) => object.dataSource, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], DataSourceEntity.prototype, "objects", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], DataSourceEntity.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], DataSourceEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], DataSourceEntity.prototype, "updatedAt", void 0);
exports.DataSourceEntity = DataSourceEntity = __decorate([
    (0, typeorm_1.Entity)('dataSource')
], DataSourceEntity);
//# sourceMappingURL=data-source.entity.js.map