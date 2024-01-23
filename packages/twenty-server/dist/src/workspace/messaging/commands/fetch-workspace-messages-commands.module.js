"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchWorkspaceMessagesCommandsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const feature_flag_entity_1 = require("../../../core/feature-flag/feature-flag.entity");
const typeorm_module_1 = require("../../../database/typeorm/typeorm.module");
const data_source_module_1 = require("../../../metadata/data-source/data-source.module");
const gmail_full_sync_command_1 = require("./gmail-full-sync.command");
const gmail_partial_sync_command_1 = require("./gmail-partial-sync.command");
const messaging_module_1 = require("../messaging.module");
const messaging_utils_service_1 = require("../services/messaging-utils.service");
let FetchWorkspaceMessagesCommandsModule = class FetchWorkspaceMessagesCommandsModule {
};
exports.FetchWorkspaceMessagesCommandsModule = FetchWorkspaceMessagesCommandsModule;
exports.FetchWorkspaceMessagesCommandsModule = FetchWorkspaceMessagesCommandsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            messaging_module_1.MessagingModule,
            data_source_module_1.DataSourceModule,
            typeorm_module_1.TypeORMModule,
            typeorm_1.TypeOrmModule.forFeature([feature_flag_entity_1.FeatureFlagEntity], 'core'),
        ],
        providers: [
            gmail_full_sync_command_1.GmailFullSyncCommand,
            gmail_partial_sync_command_1.GmailPartialSyncCommand,
            messaging_utils_service_1.MessagingUtilsService,
        ],
    })
], FetchWorkspaceMessagesCommandsModule);
//# sourceMappingURL=fetch-workspace-messages-commands.module.js.map