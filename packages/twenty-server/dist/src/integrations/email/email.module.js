"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EmailModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailModule = void 0;
const common_1 = require("@nestjs/common");
const email_constants_1 = require("./email.constants");
const logger_driver_1 = require("./drivers/logger.driver");
const smtp_driver_1 = require("./drivers/smtp.driver");
const email_service_1 = require("./email.service");
const email_sender_service_1 = require("./email-sender.service");
let EmailModule = EmailModule_1 = class EmailModule {
    static forRoot(options) {
        const provider = {
            provide: email_constants_1.EMAIL_DRIVER,
            useFactory: (...args) => {
                const config = options.useFactory(...args);
                return config ? new smtp_driver_1.SmtpDriver(config) : new logger_driver_1.LoggerDriver();
            },
            inject: options.inject || [],
        };
        return {
            module: EmailModule_1,
            providers: [email_sender_service_1.EmailSenderService, email_service_1.EmailService, provider],
            exports: [email_sender_service_1.EmailSenderService, email_service_1.EmailService],
        };
    }
};
exports.EmailModule = EmailModule;
exports.EmailModule = EmailModule = EmailModule_1 = __decorate([
    (0, common_1.Global)()
], EmailModule);
//# sourceMappingURL=email.module.js.map