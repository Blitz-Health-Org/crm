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
exports.WorkspaceMigrationEntity = exports.WorkspaceMigrationColumnActionType = void 0;
const typeorm_1 = require("typeorm");
var WorkspaceMigrationColumnActionType;
(function (WorkspaceMigrationColumnActionType) {
    WorkspaceMigrationColumnActionType["CREATE"] = "CREATE";
    WorkspaceMigrationColumnActionType["ALTER"] = "ALTER";
    WorkspaceMigrationColumnActionType["RELATION"] = "RELATION";
    WorkspaceMigrationColumnActionType["DROP"] = "DROP";
})(WorkspaceMigrationColumnActionType || (exports.WorkspaceMigrationColumnActionType = WorkspaceMigrationColumnActionType = {}));
let WorkspaceMigrationEntity = class WorkspaceMigrationEntity {
};
exports.WorkspaceMigrationEntity = WorkspaceMigrationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WorkspaceMigrationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'jsonb' }),
    __metadata("design:type", Array)
], WorkspaceMigrationEntity.prototype, "migrations", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WorkspaceMigrationEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], WorkspaceMigrationEntity.prototype, "isCustom", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], WorkspaceMigrationEntity.prototype, "appliedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'uuid' }),
    __metadata("design:type", String)
], WorkspaceMigrationEntity.prototype, "workspaceId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WorkspaceMigrationEntity.prototype, "createdAt", void 0);
exports.WorkspaceMigrationEntity = WorkspaceMigrationEntity = __decorate([
    (0, typeorm_1.Entity)('workspaceMigration')
], WorkspaceMigrationEntity);
//# sourceMappingURL=workspace-migration.entity.js.map