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
var WorkspaceQueryRunnerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceQueryRunnerService = void 0;
const common_1 = require("@nestjs/common");
const workspace_query_builder_factory_1 = require("../workspace-query-builder/workspace-query-builder.factory");
const workspace_datasource_service_1 = require("../workspace-datasource/workspace-datasource.service");
const message_queue_service_1 = require("../../integrations/message-queue/services/message-queue.service");
const message_queue_constants_1 = require("../../integrations/message-queue/message-queue.constants");
const call_webhook_jobs_job_1 = require("./jobs/call-webhook-jobs.job");
const parse_result_util_1 = require("./utils/parse-result.util");
const exception_handler_service_1 = require("../../integrations/exception-handler/exception-handler.service");
const global_exception_handler_util_1 = require("../../filters/utils/global-exception-handler.util");
const compute_object_target_table_util_1 = require("../utils/compute-object-target-table.util");
let WorkspaceQueryRunnerService = WorkspaceQueryRunnerService_1 = class WorkspaceQueryRunnerService {
    constructor(workspaceQueryBuilderFactory, workspaceDataSourceService, messageQueueService, exceptionHandlerService) {
        this.workspaceQueryBuilderFactory = workspaceQueryBuilderFactory;
        this.workspaceDataSourceService = workspaceDataSourceService;
        this.messageQueueService = messageQueueService;
        this.exceptionHandlerService = exceptionHandlerService;
        this.logger = new common_1.Logger(WorkspaceQueryRunnerService_1.name);
    }
    async findMany(args, options) {
        try {
            const { workspaceId, objectMetadataItem } = options;
            const start = performance.now();
            const query = await this.workspaceQueryBuilderFactory.findMany(args, options);
            const result = await this.execute(query, workspaceId);
            const end = performance.now();
            console.log(`query time: ${end - start} ms on query ${options.objectMetadataItem.nameSingular}`);
            return this.parseResult(result, objectMetadataItem, '');
        }
        catch (exception) {
            const error = (0, global_exception_handler_util_1.handleExceptionAndConvertToGraphQLError)(exception, this.exceptionHandlerService);
            return Promise.reject(error);
        }
    }
    async findOne(args, options) {
        var _a, _b;
        try {
            if (!args.filter || Object.keys(args.filter).length === 0) {
                throw new common_1.BadRequestException('Missing filter argument');
            }
            const { workspaceId, objectMetadataItem } = options;
            const query = await this.workspaceQueryBuilderFactory.findOne(args, options);
            const result = await this.execute(query, workspaceId);
            const parsedResult = this.parseResult(result, objectMetadataItem, '');
            return (_b = (_a = parsedResult === null || parsedResult === void 0 ? void 0 : parsedResult.edges) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.node;
        }
        catch (exception) {
            const error = (0, global_exception_handler_util_1.handleExceptionAndConvertToGraphQLError)(exception, this.exceptionHandlerService);
            return Promise.reject(error);
        }
    }
    async createMany(args, options) {
        var _a;
        try {
            const { workspaceId, objectMetadataItem } = options;
            const query = await this.workspaceQueryBuilderFactory.createMany(args, options);
            const result = await this.execute(query, workspaceId);
            const parsedResults = (_a = this.parseResult(result, objectMetadataItem, 'insertInto')) === null || _a === void 0 ? void 0 : _a.records;
            await this.triggerWebhooks(parsedResults, call_webhook_jobs_job_1.CallWebhookJobsJobOperation.create, options);
            return parsedResults;
        }
        catch (exception) {
            const error = (0, global_exception_handler_util_1.handleExceptionAndConvertToGraphQLError)(exception, this.exceptionHandlerService);
            return Promise.reject(error);
        }
    }
    async createOne(args, options) {
        const results = await this.createMany({ data: [args.data] }, options);
        return results === null || results === void 0 ? void 0 : results[0];
    }
    async updateOne(args, options) {
        var _a;
        try {
            const { workspaceId, objectMetadataItem } = options;
            const query = await this.workspaceQueryBuilderFactory.updateOne(args, options);
            const result = await this.execute(query, workspaceId);
            const parsedResults = (_a = this.parseResult(result, objectMetadataItem, 'update')) === null || _a === void 0 ? void 0 : _a.records;
            await this.triggerWebhooks(parsedResults, call_webhook_jobs_job_1.CallWebhookJobsJobOperation.update, options);
            return parsedResults === null || parsedResults === void 0 ? void 0 : parsedResults[0];
        }
        catch (exception) {
            const error = (0, global_exception_handler_util_1.handleExceptionAndConvertToGraphQLError)(exception, this.exceptionHandlerService);
            return Promise.reject(error);
        }
    }
    async deleteOne(args, options) {
        var _a;
        try {
            const { workspaceId, objectMetadataItem } = options;
            const query = await this.workspaceQueryBuilderFactory.deleteOne(args, options);
            const result = await this.execute(query, workspaceId);
            const parsedResults = (_a = this.parseResult(result, objectMetadataItem, 'deleteFrom')) === null || _a === void 0 ? void 0 : _a.records;
            await this.triggerWebhooks(parsedResults, call_webhook_jobs_job_1.CallWebhookJobsJobOperation.delete, options);
            return parsedResults === null || parsedResults === void 0 ? void 0 : parsedResults[0];
        }
        catch (exception) {
            const error = (0, global_exception_handler_util_1.handleExceptionAndConvertToGraphQLError)(exception, this.exceptionHandlerService);
            return Promise.reject(error);
        }
    }
    async updateMany(args, options) {
        var _a;
        try {
            const { workspaceId, objectMetadataItem } = options;
            const query = await this.workspaceQueryBuilderFactory.updateMany(args, options);
            const result = await this.execute(query, workspaceId);
            const parsedResults = (_a = this.parseResult(result, objectMetadataItem, 'update')) === null || _a === void 0 ? void 0 : _a.records;
            await this.triggerWebhooks(parsedResults, call_webhook_jobs_job_1.CallWebhookJobsJobOperation.update, options);
            return parsedResults;
        }
        catch (exception) {
            const error = (0, global_exception_handler_util_1.handleExceptionAndConvertToGraphQLError)(exception, this.exceptionHandlerService);
            return Promise.reject(error);
        }
    }
    async deleteMany(args, options) {
        var _a;
        try {
            const { workspaceId, objectMetadataItem } = options;
            const query = await this.workspaceQueryBuilderFactory.deleteMany(args, options);
            const result = await this.execute(query, workspaceId);
            const parsedResults = (_a = this.parseResult(result, objectMetadataItem, 'deleteFrom')) === null || _a === void 0 ? void 0 : _a.records;
            await this.triggerWebhooks(parsedResults, call_webhook_jobs_job_1.CallWebhookJobsJobOperation.delete, options);
            return parsedResults;
        }
        catch (exception) {
            const error = (0, global_exception_handler_util_1.handleExceptionAndConvertToGraphQLError)(exception, this.exceptionHandlerService);
            return Promise.reject(error);
        }
    }
    async execute(query, workspaceId) {
        const workspaceDataSource = await this.workspaceDataSourceService.connectToWorkspaceDataSource(workspaceId);
        await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`
      SET search_path TO ${this.workspaceDataSourceService.getSchemaName(workspaceId)};
    `));
        const results = await (workspaceDataSource === null || workspaceDataSource === void 0 ? void 0 : workspaceDataSource.query(`
      SELECT graphql.resolve($$
        ${query}
      $$);
    `));
        return results;
    }
    parseResult(graphqlResult, objectMetadataItem, command) {
        var _a, _b, _c, _d, _e;
        const entityKey = `${command}${(0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadataItem)}Collection`;
        const result = (_c = (_b = (_a = graphqlResult === null || graphqlResult === void 0 ? void 0 : graphqlResult[0]) === null || _a === void 0 ? void 0 : _a.resolve) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c[entityKey];
        const errors = (_e = (_d = graphqlResult === null || graphqlResult === void 0 ? void 0 : graphqlResult[0]) === null || _d === void 0 ? void 0 : _d.resolve) === null || _e === void 0 ? void 0 : _e.errors;
        if (!result) {
            throw new common_1.InternalServerErrorException(`GraphQL errors on ${command}${objectMetadataItem.nameSingular}: ${JSON.stringify(errors)}`);
        }
        return (0, parse_result_util_1.parseResult)(result);
    }
    async executeAndParse(query, objectMetadataItem, command, workspaceId) {
        const result = await this.execute(query, workspaceId);
        return this.parseResult(result, objectMetadataItem, command);
    }
    async triggerWebhooks(jobsData, operation, options) {
        if (!Array.isArray(jobsData)) {
            return;
        }
        jobsData.forEach((jobData) => {
            this.messageQueueService.add(call_webhook_jobs_job_1.CallWebhookJobsJob.name, {
                record: jobData,
                workspaceId: options.workspaceId,
                operation,
                objectMetadataItem: options.objectMetadataItem,
            }, { retryLimit: 3 });
        });
    }
};
exports.WorkspaceQueryRunnerService = WorkspaceQueryRunnerService;
exports.WorkspaceQueryRunnerService = WorkspaceQueryRunnerService = WorkspaceQueryRunnerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(message_queue_constants_1.MessageQueue.webhookQueue)),
    __metadata("design:paramtypes", [workspace_query_builder_factory_1.WorkspaceQueryBuilderFactory,
        workspace_datasource_service_1.WorkspaceDataSourceService,
        message_queue_service_1.MessageQueueService,
        exception_handler_service_1.ExceptionHandlerService])
], WorkspaceQueryRunnerService);
//# sourceMappingURL=workspace-query-runner.service.js.map