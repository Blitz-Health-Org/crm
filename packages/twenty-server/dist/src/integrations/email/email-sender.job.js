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
var EmailSenderJob_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSenderJob = void 0;
const common_1 = require("@nestjs/common");
const email_sender_service_1 = require("./email-sender.service");
let EmailSenderJob = EmailSenderJob_1 = class EmailSenderJob {
    constructor(emailSenderService) {
        this.emailSenderService = emailSenderService;
        this.logger = new common_1.Logger(EmailSenderJob_1.name);
    }
    async handle(data) {
        await this.emailSenderService.send(data);
        this.logger.log(`Email to ${data.to} sent`);
    }
};
exports.EmailSenderJob = EmailSenderJob;
exports.EmailSenderJob = EmailSenderJob = EmailSenderJob_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [email_sender_service_1.EmailSenderService])
], EmailSenderJob);
//# sourceMappingURL=email-sender.job.js.map