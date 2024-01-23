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
exports.TimelineMessagingResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const jwt_auth_guard_1 = require("../../guards/jwt.auth.guard");
const workspace_entity_1 = require("../workspace/workspace.entity");
const auth_workspace_decorator_1 = require("../../decorators/auth-workspace.decorator");
const timeline_messaging_service_1 = require("./timeline-messaging.service");
let TimelineThread = class TimelineThread {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], TimelineThread.prototype, "read", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TimelineThread.prototype, "senderName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TimelineThread.prototype, "senderPictureUrl", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TimelineThread.prototype, "numberOfMessagesInThread", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TimelineThread.prototype, "subject", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TimelineThread.prototype, "body", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], TimelineThread.prototype, "receivedAt", void 0);
TimelineThread = __decorate([
    (0, typeorm_1.Entity)({ name: 'timelineThread', schema: 'core' }),
    (0, graphql_1.ObjectType)('TimelineThread')
], TimelineThread);
let TimelineMessagingResolver = class TimelineMessagingResolver {
    constructor(timelineMessagingService) {
        this.timelineMessagingService = timelineMessagingService;
    }
    async getTimelineThreadsFromPersonId({ id: workspaceId }, personId) {
        const timelineThreads = await this.timelineMessagingService.getMessagesFromPersonIds(workspaceId, [personId]);
        return timelineThreads;
    }
    async getTimelineThreadsFromCompanyId({ id: workspaceId }, companyId) {
        const timelineThreads = await this.timelineMessagingService.getMessagesFromCompanyId(workspaceId, companyId);
        return timelineThreads;
    }
};
exports.TimelineMessagingResolver = TimelineMessagingResolver;
__decorate([
    (0, graphql_1.Query)(() => [TimelineThread]),
    __param(0, (0, auth_workspace_decorator_1.AuthWorkspace)()),
    __param(1, (0, graphql_1.Args)('personId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workspace_entity_1.Workspace, String]),
    __metadata("design:returntype", Promise)
], TimelineMessagingResolver.prototype, "getTimelineThreadsFromPersonId", null);
__decorate([
    (0, graphql_1.Query)(() => [TimelineThread]),
    __param(0, (0, auth_workspace_decorator_1.AuthWorkspace)()),
    __param(1, (0, graphql_1.Args)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workspace_entity_1.Workspace, String]),
    __metadata("design:returntype", Promise)
], TimelineMessagingResolver.prototype, "getTimelineThreadsFromCompanyId", null);
exports.TimelineMessagingResolver = TimelineMessagingResolver = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Resolver)(() => [TimelineThread]),
    __metadata("design:paramtypes", [timeline_messaging_service_1.TimelineMessagingService])
], TimelineMessagingResolver);
//# sourceMappingURL=timeline-messaging.resolver.js.map