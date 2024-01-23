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
exports.IntelligenceService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const environment_service_1 = require("../../integrations/environment/environment.service");
let IntelligenceService = class IntelligenceService {
    constructor(environmentService, httpService) {
        this.environmentService = environmentService;
        this.httpService = httpService;
    }
    async enrichCompany(domainName) {
        const enrichedCompany = await this.httpService.axiosRef.get(`https://companies.twenty.com/${domainName}`, {
            validateStatus: function () {
                return true;
            },
        });
        if (enrichedCompany.status !== 200) {
            return {};
        }
        return {
            linkedinLinkUrl: `https://linkedin.com/` + enrichedCompany.data.handle,
        };
    }
    async completeWithAi(content) {
        return this.httpService.axiosRef.post('https://openrouter.ai/api/v1/chat/completions', {
            headers: {
                Authorization: `Bearer ${this.environmentService.getOpenRouterApiKey()}`,
                'HTTP-Referer': `https://twenty.com`,
                'X-Title': `Twenty CRM`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'mistralai/mixtral-8x7b-instruct',
                messages: [{ role: 'user', content: content }],
            }),
        });
    }
};
exports.IntelligenceService = IntelligenceService;
exports.IntelligenceService = IntelligenceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService,
        axios_1.HttpService])
], IntelligenceService);
//# sourceMappingURL=intelligence.service.js.map