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
exports.DataSeedDemoWorkspaceCommand = void 0;
const nest_commander_1 = require("nest-commander");
const typeorm_1 = require("typeorm");
const demo_1 = require("../typeorm-seeds/core/demo");
const environment_service_1 = require("../../integrations/environment/environment.service");
const workspace_manager_service_1 = require("../../workspace/workspace-manager/workspace-manager.service");
let DataSeedDemoWorkspaceCommand = class DataSeedDemoWorkspaceCommand extends nest_commander_1.CommandRunner {
    constructor(environmentService, workspaceManagerService) {
        super();
        this.environmentService = environmentService;
        this.workspaceManagerService = workspaceManagerService;
    }
    async run() {
        try {
            const dataSource = new typeorm_1.DataSource({
                url: this.environmentService.getPGDatabaseUrl(),
                type: 'postgres',
                logging: true,
                schema: 'public',
            });
            await dataSource.initialize();
            const demoWorkspaceIds = this.environmentService.getDemoWorkspaceIds();
            if (demoWorkspaceIds.length === 0) {
                throw new Error('Could not get DEMO_WORKSPACE_IDS. Please specify in .env');
            }
            for (const workspaceId of demoWorkspaceIds) {
                await (0, demo_1.deleteCoreSchema)(dataSource, workspaceId);
                await this.workspaceManagerService.delete(workspaceId);
                await (0, demo_1.seedCoreSchema)(dataSource, workspaceId);
                await this.workspaceManagerService.initDemo(workspaceId);
            }
        }
        catch (error) {
            console.error(error);
            return;
        }
    }
};
exports.DataSeedDemoWorkspaceCommand = DataSeedDemoWorkspaceCommand;
exports.DataSeedDemoWorkspaceCommand = DataSeedDemoWorkspaceCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'workspace:seed:demo',
        description: 'Seed workspace with demo data. This command is intended for development only.',
    }),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService,
        workspace_manager_service_1.WorkspaceManagerService])
], DataSeedDemoWorkspaceCommand);
//# sourceMappingURL=data-seed-demo-workspace.command.js.map