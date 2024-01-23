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
var CallWebhookJobsJob_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallWebhookJobsJob = exports.CallWebhookJobsJobOperation = void 0;
const common_1 = require("@nestjs/common");
const workspace_datasource_service_1 = require("../../workspace-datasource/workspace-datasource.service");
const object_metadata_service_1 = require("../../../metadata/object-metadata/object-metadata.service");
const data_source_service_1 = require("../../../metadata/data-source/data-source.service");
const message_queue_service_1 = require("../../../integrations/message-queue/services/message-queue.service");
const message_queue_constants_1 = require("../../../integrations/message-queue/message-queue.constants");
const call_webhook_job_1 = require("./call-webhook.job");
var CallWebhookJobsJobOperation;
(function (CallWebhookJobsJobOperation) {
    CallWebhookJobsJobOperation["create"] = "create";
    CallWebhookJobsJobOperation["update"] = "update";
    CallWebhookJobsJobOperation["delete"] = "delete";
})(CallWebhookJobsJobOperation || (exports.CallWebhookJobsJobOperation = CallWebhookJobsJobOperation = {}));
let CallWebhookJobsJob = CallWebhookJobsJob_1 = class CallWebhookJobsJob {
    constructor(workspaceDataSourceService, objectMetadataService, dataSourceService, messageQueueService) {
        this.workspaceDataSourceService = workspaceDataSourceService;
        this.objectMetadataService = objectMetadataService;
        this.dataSourceService = dataSourceService;
        this.messageQueueService = messageQueueService;
        this.logger = new common_1.Logger(CallWebhookJobsJob_1.name);
    }
    async handle(data) {
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(data.workspaceId);
        const workspaceDataSource = await this.workspaceDataSourceService.connectToWorkspaceDataSource(data.workspaceId);
        const nameSingular = data.objectMetadataItem.nameSingular;
        const operation = data.operation;
        const eventType = `${operation}.${nameSingular}`;
        const webhooks = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`
            SELECT * FROM ${dataSourceMetadata.schema}."webhook" 
            WHERE operation LIKE '%${eventType}%' 
            OR operation LIKE '%*.${nameSingular}%' 
            OR operation LIKE '%${operation}.*%'
            OR operation LIKE '%*.*%'
          `));
        webhooks.forEach((webhook) => {
            this.messageQueueService.add(call_webhook_job_1.CallWebhookJob.name, {
                targetUrl: webhook.targetUrl,
                eventType,
                objectMetadata: {
                    id: data.objectMetadataItem.id,
                    nameSingular: data.objectMetadataItem.nameSingular,
                },
                workspaceId: data.workspaceId,
                webhookId: webhook.id,
                eventDate: new Date(),
                record: data.record,
            }, { retryLimit: 3 });
        });
        if (webhooks.length) {
            this.logger.log(`CallWebhookJobsJob on eventType '${eventType}' called on webhooks ids [\n"${webhooks
                .map((webhook) => webhook.id)
                .join('",\n"')}"\n]`);
        }
    }
};
exports.CallWebhookJobsJob = CallWebhookJobsJob;
exports.CallWebhookJobsJob = CallWebhookJobsJob = CallWebhookJobsJob_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)(message_queue_constants_1.MessageQueue.webhookQueue)),
    __metadata("design:paramtypes", [workspace_datasource_service_1.WorkspaceDataSourceService,
        object_metadata_service_1.ObjectMetadataService,
        data_source_service_1.DataSourceService,
        message_queue_service_1.MessageQueueService])
], CallWebhookJobsJob);
//# sourceMappingURL=call-webhook-jobs.job.js.map