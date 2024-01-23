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
var JobsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const gmail_full_sync_job_1 = require("../../workspace/messaging/jobs/gmail-full-sync.job");
const call_webhook_jobs_job_1 = require("../../workspace/workspace-query-runner/jobs/call-webhook-jobs.job");
const call_webhook_job_1 = require("../../workspace/workspace-query-runner/jobs/call-webhook.job");
const workspace_datasource_module_1 = require("../../workspace/workspace-datasource/workspace-datasource.module");
const object_metadata_module_1 = require("../../metadata/object-metadata/object-metadata.module");
const data_source_module_1 = require("../../metadata/data-source/data-source.module");
const clean_inactive_workspace_job_1 = require("../../workspace/cron/clean-inactive-workspaces/clean-inactive-workspace.job");
const typeorm_module_1 = require("../../database/typeorm/typeorm.module");
const fetch_workspace_messages_module_1 = require("../../workspace/messaging/services/fetch-workspace-messages.module");
const gmail_partial_sync_job_1 = require("../../workspace/messaging/jobs/gmail-partial-sync.job");
const email_sender_job_1 = require("../email/email-sender.job");
const user_module_1 = require("../../core/user/user.module");
const environment_module_1 = require("../environment/environment.module");
const feature_flag_entity_1 = require("../../core/feature-flag/feature-flag.entity");
let JobsModule = JobsModule_1 = class JobsModule {
    constructor(moduleRef) {
        this.moduleRef = moduleRef;
        JobsModule_1.moduleRef = this.moduleRef;
    }
};
exports.JobsModule = JobsModule;
exports.JobsModule = JobsModule = JobsModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            workspace_datasource_module_1.WorkspaceDataSourceModule,
            object_metadata_module_1.ObjectMetadataModule,
            data_source_module_1.DataSourceModule,
            axios_1.HttpModule,
            typeorm_module_1.TypeORMModule,
            fetch_workspace_messages_module_1.FetchWorkspaceMessagesModule,
            user_module_1.UserModule,
            environment_module_1.EnvironmentModule,
            typeorm_module_1.TypeORMModule,
            typeorm_1.TypeOrmModule.forFeature([feature_flag_entity_1.FeatureFlagEntity], 'core'),
        ],
        providers: [
            {
                provide: gmail_full_sync_job_1.GmailFullSyncJob.name,
                useClass: gmail_full_sync_job_1.GmailFullSyncJob,
            },
            {
                provide: gmail_partial_sync_job_1.GmailPartialSyncJob.name,
                useClass: gmail_partial_sync_job_1.GmailPartialSyncJob,
            },
            {
                provide: call_webhook_jobs_job_1.CallWebhookJobsJob.name,
                useClass: call_webhook_jobs_job_1.CallWebhookJobsJob,
            },
            {
                provide: call_webhook_job_1.CallWebhookJob.name,
                useClass: call_webhook_job_1.CallWebhookJob,
            },
            {
                provide: clean_inactive_workspace_job_1.CleanInactiveWorkspaceJob.name,
                useClass: clean_inactive_workspace_job_1.CleanInactiveWorkspaceJob,
            },
            { provide: email_sender_job_1.EmailSenderJob.name, useClass: email_sender_job_1.EmailSenderJob },
        ],
    }),
    __metadata("design:paramtypes", [core_1.ModuleRef])
], JobsModule);
//# sourceMappingURL=jobs.module.js.map