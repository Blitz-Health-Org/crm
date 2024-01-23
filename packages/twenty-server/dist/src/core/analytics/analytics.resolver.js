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
exports.AnalyticsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const optional_jwt_auth_guard_1 = require("../../guards/optional-jwt.auth.guard");
const auth_workspace_decorator_1 = require("../../decorators/auth-workspace.decorator");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const analytics_service_1 = require("./analytics.service");
const analytics_entity_1 = require("./analytics.entity");
const create_analytics_input_1 = require("./dto/create-analytics.input");
let AnalyticsResolver = class AnalyticsResolver {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    createEvent(createEventInput, workspace, user) {
        return this.analyticsService.create(createEventInput, user, workspace);
    }
};
exports.AnalyticsResolver = AnalyticsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => analytics_entity_1.Analytics),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_workspace_decorator_1.AuthWorkspace)()),
    __param(2, (0, auth_user_decorator_1.AuthUser)({ allowUndefined: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_analytics_input_1.CreateAnalyticsInput, Object, Object]),
    __metadata("design:returntype", void 0)
], AnalyticsResolver.prototype, "createEvent", null);
exports.AnalyticsResolver = AnalyticsResolver = __decorate([
    (0, common_1.UseGuards)(optional_jwt_auth_guard_1.OptionalJwtAuthGuard),
    (0, graphql_1.Resolver)(() => analytics_entity_1.Analytics),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], AnalyticsResolver);
//# sourceMappingURL=analytics.resolver.js.map