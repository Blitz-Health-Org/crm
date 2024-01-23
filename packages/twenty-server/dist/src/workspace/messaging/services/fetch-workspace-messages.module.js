"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchWorkspaceMessagesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_module_1 = require("../../../database/typeorm/typeorm.module");
const environment_module_1 = require("../../../integrations/environment/environment.module");
const data_source_module_1 = require("../../../metadata/data-source/data-source.module");
const messaging_module_1 = require("../messaging.module");
const gmail_client_provider_1 = require("../providers/gmail/gmail-client.provider");
const fetch_messages_by_batches_service_1 = require("./fetch-messages-by-batches.service");
const gmail_full_sync_service_1 = require("./gmail-full-sync.service");
const gmail_partial_sync_service_1 = require("./gmail-partial-sync.service");
const gmail_refresh_access_token_service_1 = require("./gmail-refresh-access-token.service");
const messaging_utils_service_1 = require("./messaging-utils.service");
let FetchWorkspaceMessagesModule = class FetchWorkspaceMessagesModule {
};
exports.FetchWorkspaceMessagesModule = FetchWorkspaceMessagesModule;
exports.FetchWorkspaceMessagesModule = FetchWorkspaceMessagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            messaging_module_1.MessagingModule,
            typeorm_module_1.TypeORMModule,
            data_source_module_1.DataSourceModule,
            environment_module_1.EnvironmentModule,
        ],
        providers: [
            gmail_full_sync_service_1.GmailFullSyncService,
            gmail_partial_sync_service_1.GmailPartialSyncService,
            fetch_messages_by_batches_service_1.FetchMessagesByBatchesService,
            gmail_refresh_access_token_service_1.GmailRefreshAccessTokenService,
            messaging_utils_service_1.MessagingUtilsService,
            gmail_client_provider_1.GmailClientProvider,
        ],
        exports: [
            gmail_partial_sync_service_1.GmailPartialSyncService,
            gmail_full_sync_service_1.GmailFullSyncService,
            gmail_refresh_access_token_service_1.GmailRefreshAccessTokenService,
            messaging_utils_service_1.MessagingUtilsService,
        ],
    })
], FetchWorkspaceMessagesModule);
//# sourceMappingURL=fetch-workspace-messages.module.js.map