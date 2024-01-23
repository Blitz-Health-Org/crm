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
var CallWebhookJob_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallWebhookJob = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let CallWebhookJob = CallWebhookJob_1 = class CallWebhookJob {
    constructor(httpService) {
        this.httpService = httpService;
        this.logger = new common_1.Logger(CallWebhookJob_1.name);
    }
    async handle(data) {
        try {
            await this.httpService.axiosRef.post(data.targetUrl, data);
            this.logger.log(`CallWebhookJob successfully called on targetUrl '${data.targetUrl}'`);
        }
        catch (err) {
            throw new Error(`Error calling webhook on targetUrl '${data.targetUrl}': ${err}`);
        }
    }
};
exports.CallWebhookJob = CallWebhookJob;
exports.CallWebhookJob = CallWebhookJob = CallWebhookJob_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CallWebhookJob);
//# sourceMappingURL=call-webhook.job.js.map