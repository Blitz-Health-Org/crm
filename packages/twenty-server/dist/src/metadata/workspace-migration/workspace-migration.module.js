"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceMigrationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const factories_1 = require("./factories/factories");
const workspace_migration_factory_1 = require("./workspace-migration.factory");
const workspace_migration_service_1 = require("./workspace-migration.service");
const workspace_migration_entity_1 = require("./workspace-migration.entity");
let WorkspaceMigrationModule = class WorkspaceMigrationModule {
};
exports.WorkspaceMigrationModule = WorkspaceMigrationModule;
exports.WorkspaceMigrationModule = WorkspaceMigrationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([workspace_migration_entity_1.WorkspaceMigrationEntity], 'metadata')],
        providers: [
            ...factories_1.workspaceColumnActionFactories,
            workspace_migration_factory_1.WorkspaceMigrationFactory,
            workspace_migration_service_1.WorkspaceMigrationService,
        ],
        exports: [workspace_migration_factory_1.WorkspaceMigrationFactory, workspace_migration_service_1.WorkspaceMigrationService],
    })
], WorkspaceMigrationModule);
//# sourceMappingURL=workspace-migration.module.js.map