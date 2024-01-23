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
exports.GoogleGmailService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const data_source_service_1 = require("../../../metadata/data-source/data-source.service");
const typeorm_service_1 = require("../../../database/typeorm/typeorm.service");
const message_queue_constants_1 = require("../../../integrations/message-queue/message-queue.constants");
const message_queue_service_1 = require("../../../integrations/message-queue/services/message-queue.service");
const gmail_full_sync_job_1 = require("../../../workspace/messaging/jobs/gmail-full-sync.job");
let GoogleGmailService = class GoogleGmailService {
    constructor(dataSourceService, typeORMService, messageQueueService) {
        this.dataSourceService = dataSourceService;
        this.typeORMService = typeORMService;
        this.messageQueueService = messageQueueService;
    }
    async saveConnectedAccount(saveConnectedAccountInput) {
        const { handle, workspaceId, provider, accessToken, refreshToken, workspaceMemberId, } = saveConnectedAccountInput;
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(workspaceId);
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSourceMetadata);
        const connectedAccount = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`SELECT * FROM ${dataSourceMetadata.schema}."connectedAccount" WHERE "handle" = $1 AND "provider" = $2 AND "accountOwnerId" = $3`, [handle, provider, workspaceMemberId]));
        if (connectedAccount.length > 0) {
            console.log('This account is already connected to your workspace.');
            return;
        }
        const connectedAccountId = (0, uuid_1.v4)();
        await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.transaction(async (manager) => {
            await manager.query(`INSERT INTO ${dataSourceMetadata.schema}."connectedAccount" ("id", "handle", "provider", "accessToken", "refreshToken", "accountOwnerId") VALUES ($1, $2, $3, $4, $5, $6)`, [
                connectedAccountId,
                handle,
                provider,
                accessToken,
                refreshToken,
                workspaceMemberId,
            ]);
            await manager.query(`INSERT INTO ${dataSourceMetadata.schema}."messageChannel" ("visibility", "handle", "connectedAccountId", "type") VALUES ($1, $2, $3, $4)`, ['share_everything', handle, connectedAccountId, 'gmail']);
        }));
        await this.messageQueueService.add(gmail_full_sync_job_1.GmailFullSyncJob.name, {
            workspaceId,
            connectedAccountId,
        }, {
            id: connectedAccountId,
            retryLimit: 2,
        });
        return;
    }
};
exports.GoogleGmailService = GoogleGmailService;
exports.GoogleGmailService = GoogleGmailService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(message_queue_constants_1.MessageQueue.messagingQueue)),
    __metadata("design:paramtypes", [data_source_service_1.DataSourceService,
        typeorm_service_1.TypeORMService,
        message_queue_service_1.MessageQueueService])
], GoogleGmailService);
//# sourceMappingURL=google-gmail.service.js.map