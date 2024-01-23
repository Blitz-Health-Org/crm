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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceMigrationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const workspace_migration_entity_1 = require("./workspace-migration.entity");
let WorkspaceMigrationService = class WorkspaceMigrationService {
    constructor(workspaceMigrationRepository) {
        this.workspaceMigrationRepository = workspaceMigrationRepository;
    }
    async getPendingMigrations(workspaceId) {
        return await this.workspaceMigrationRepository.find({
            order: { createdAt: 'ASC', name: 'ASC' },
            where: {
                appliedAt: (0, typeorm_2.IsNull)(),
                workspaceId,
            },
        });
    }
    async setAppliedAtForMigration(workspaceId, migration) {
        await this.workspaceMigrationRepository.save({
            id: migration.id,
            appliedAt: new Date(),
        });
    }
    async createCustomMigration(workspaceId, migrations) {
        await this.workspaceMigrationRepository.save({
            migrations,
            workspaceId,
            isCustom: true,
        });
    }
    async delete(workspaceId) {
        await this.workspaceMigrationRepository.delete({ workspaceId });
    }
};
exports.WorkspaceMigrationService = WorkspaceMigrationService;
exports.WorkspaceMigrationService = WorkspaceMigrationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(workspace_migration_entity_1.WorkspaceMigrationEntity, 'metadata')),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WorkspaceMigrationService);
//# sourceMappingURL=workspace-migration.service.js.map