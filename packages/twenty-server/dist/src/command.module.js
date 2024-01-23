"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandModule = void 0;
const common_1 = require("@nestjs/common");
const database_command_module_1 = require("./database/commands/database-command.module");
const fetch_workspace_messages_commands_module_1 = require("./workspace/messaging/commands/fetch-workspace-messages-commands.module");
const start_clean_inactive_workspaces_cron_command_1 = require("./workspace/cron/clean-inactive-workspaces/commands/start-clean-inactive-workspaces.cron.command");
const stop_clean_inactive_workspaces_cron_command_1 = require("./workspace/cron/clean-inactive-workspaces/commands/stop-clean-inactive-workspaces.cron.command");
const clean_inactive_workspaces_command_1 = require("./workspace/cron/clean-inactive-workspaces/commands/clean-inactive-workspaces.command");
const workspace_health_command_module_1 = require("./workspace/workspace-health/commands/workspace-health-command.module");
const app_module_1 = require("./app.module");
const workspace_sync_metadata_commands_module_1 = require("./workspace/workspace-sync-metadata/commands/workspace-sync-metadata-commands.module");
let CommandModule = class CommandModule {
};
exports.CommandModule = CommandModule;
exports.CommandModule = CommandModule = __decorate([
    (0, common_1.Module)({
        imports: [
            app_module_1.AppModule,
            workspace_sync_metadata_commands_module_1.WorkspaceSyncMetadataCommandsModule,
            database_command_module_1.DatabaseCommandModule,
            fetch_workspace_messages_commands_module_1.FetchWorkspaceMessagesCommandsModule,
            start_clean_inactive_workspaces_cron_command_1.StartCleanInactiveWorkspacesCronCommand,
            stop_clean_inactive_workspaces_cron_command_1.StopCleanInactiveWorkspacesCronCommand,
            clean_inactive_workspaces_command_1.CleanInactiveWorkspacesCommand,
            workspace_health_command_module_1.WorkspaceHealthCommandModule,
        ],
    })
], CommandModule);
//# sourceMappingURL=command.module.js.map