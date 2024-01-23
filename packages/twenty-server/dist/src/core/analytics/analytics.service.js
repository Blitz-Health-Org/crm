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
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const anonymize_1 = require("../../utils/anonymize");
const environment_service_1 = require("../../integrations/environment/environment.service");
let AnalyticsService = class AnalyticsService {
    constructor(environmentService, httpService) {
        this.environmentService = environmentService;
        this.httpService = httpService;
    }
    async create(createEventInput, user, workspace) {
        if (!this.environmentService.isTelemetryEnabled()) {
            return { success: true };
        }
        const anonymizationEnabled = this.environmentService.isTelemetryAnonymizationEnabled();
        const data = {
            type: createEventInput.type,
            data: Object.assign({ userUUID: user
                    ? anonymizationEnabled
                        ? (0, anonymize_1.anonymize)(user.id)
                        : user.id
                    : undefined, workspaceUUID: workspace
                    ? anonymizationEnabled
                        ? (0, anonymize_1.anonymize)(workspace.id)
                        : workspace.id
                    : undefined, workspaceDomain: workspace ? workspace.domainName : undefined }, createEventInput.data),
        };
        try {
            await this.httpService.post('/event?noToken', data);
        }
        catch (_a) { }
        return { success: true };
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService,
        axios_1.HttpService])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map