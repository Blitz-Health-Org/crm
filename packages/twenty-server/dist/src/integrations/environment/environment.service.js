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
exports.EnvironmentService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const email_interface_1 = require("../email/interfaces/email.interface");
const interfaces_1 = require("../logger/interfaces");
const interfaces_2 = require("../exception-handler/interfaces");
const interfaces_3 = require("../file-storage/interfaces");
const interfaces_4 = require("../message-queue/interfaces");
const support_interface_1 = require("./interfaces/support.interface");
let EnvironmentService = class EnvironmentService {
    constructor(configService) {
        this.configService = configService;
    }
    isDebugMode() {
        var _a;
        return (_a = this.configService.get('DEBUG_MODE')) !== null && _a !== void 0 ? _a : false;
    }
    isSignInPrefilled() {
        var _a;
        return (_a = this.configService.get('SIGN_IN_PREFILLED')) !== null && _a !== void 0 ? _a : false;
    }
    isBillingEnabled() {
        var _a;
        return (_a = this.configService.get('IS_BILLING_ENABLED')) !== null && _a !== void 0 ? _a : false;
    }
    getBillingUrl() {
        var _a;
        return (_a = this.configService.get('BILLING_PLAN_REQUIRED_LINK')) !== null && _a !== void 0 ? _a : '';
    }
    isTelemetryEnabled() {
        var _a;
        return (_a = this.configService.get('TELEMETRY_ENABLED')) !== null && _a !== void 0 ? _a : true;
    }
    isTelemetryAnonymizationEnabled() {
        var _a;
        return ((_a = this.configService.get('TELEMETRY_ANONYMIZATION_ENABLED')) !== null && _a !== void 0 ? _a : true);
    }
    getPort() {
        var _a;
        return (_a = this.configService.get('PORT')) !== null && _a !== void 0 ? _a : 3000;
    }
    getPGDatabaseUrl() {
        return this.configService.get('PG_DATABASE_URL');
    }
    getRedisHost() {
        var _a;
        return (_a = this.configService.get('REDIS_HOST')) !== null && _a !== void 0 ? _a : '127.0.0.1';
    }
    getRedisPort() {
        var _a;
        return +((_a = this.configService.get('REDIS_PORT')) !== null && _a !== void 0 ? _a : 6379);
    }
    getFrontBaseUrl() {
        return this.configService.get('FRONT_BASE_URL');
    }
    getServerUrl() {
        return this.configService.get('SERVER_URL');
    }
    getAccessTokenSecret() {
        return this.configService.get('ACCESS_TOKEN_SECRET');
    }
    getAccessTokenExpiresIn() {
        var _a;
        return (_a = this.configService.get('ACCESS_TOKEN_EXPIRES_IN')) !== null && _a !== void 0 ? _a : '30m';
    }
    getRefreshTokenSecret() {
        return this.configService.get('REFRESH_TOKEN_SECRET');
    }
    getRefreshTokenExpiresIn() {
        var _a;
        return (_a = this.configService.get('REFRESH_TOKEN_EXPIRES_IN')) !== null && _a !== void 0 ? _a : '90d';
    }
    getRefreshTokenCoolDown() {
        var _a;
        return (_a = this.configService.get('REFRESH_TOKEN_COOL_DOWN')) !== null && _a !== void 0 ? _a : '1m';
    }
    getLoginTokenSecret() {
        return this.configService.get('LOGIN_TOKEN_SECRET');
    }
    getLoginTokenExpiresIn() {
        var _a;
        return (_a = this.configService.get('LOGIN_TOKEN_EXPIRES_IN')) !== null && _a !== void 0 ? _a : '15m';
    }
    getTransientTokenExpiresIn() {
        var _a;
        return ((_a = this.configService.get('SHORT_TERM_TOKEN_EXPIRES_IN')) !== null && _a !== void 0 ? _a : '5m');
    }
    getApiTokenExpiresIn() {
        var _a;
        return (_a = this.configService.get('API_TOKEN_EXPIRES_IN')) !== null && _a !== void 0 ? _a : '1000y';
    }
    getFrontAuthCallbackUrl() {
        var _a;
        return ((_a = this.configService.get('FRONT_AUTH_CALLBACK_URL')) !== null && _a !== void 0 ? _a : this.getFrontBaseUrl() + '/verify');
    }
    isMessagingProviderGmailEnabled() {
        var _a;
        return ((_a = this.configService.get('MESSAGING_PROVIDER_GMAIL_ENABLED')) !== null && _a !== void 0 ? _a : false);
    }
    getMessagingProviderGmailCallbackUrl() {
        return this.configService.get('MESSAGING_PROVIDER_GMAIL_CALLBACK_URL');
    }
    isAuthGoogleEnabled() {
        var _a;
        return (_a = this.configService.get('AUTH_GOOGLE_ENABLED')) !== null && _a !== void 0 ? _a : false;
    }
    getAuthGoogleClientId() {
        return this.configService.get('AUTH_GOOGLE_CLIENT_ID');
    }
    getAuthGoogleClientSecret() {
        return this.configService.get('AUTH_GOOGLE_CLIENT_SECRET');
    }
    getAuthGoogleCallbackUrl() {
        return this.configService.get('AUTH_GOOGLE_CALLBACK_URL');
    }
    getStorageDriverType() {
        var _a;
        return ((_a = this.configService.get('STORAGE_TYPE')) !== null && _a !== void 0 ? _a : interfaces_3.StorageDriverType.Local);
    }
    getMessageQueueDriverType() {
        var _a;
        return ((_a = this.configService.get('MESSAGE_QUEUE_TYPE')) !== null && _a !== void 0 ? _a : interfaces_4.MessageQueueDriverType.Sync);
    }
    getStorageS3Region() {
        return this.configService.get('STORAGE_S3_REGION');
    }
    getStorageS3Name() {
        return this.configService.get('STORAGE_S3_NAME');
    }
    getStorageS3Endpoint() {
        return this.configService.get('STORAGE_S3_ENDPOINT');
    }
    getStorageLocalPath() {
        var _a;
        return ((_a = this.configService.get('STORAGE_LOCAL_PATH')) !== null && _a !== void 0 ? _a : '.local-storage');
    }
    getEmailFromAddress() {
        var _a;
        return ((_a = this.configService.get('EMAIL_FROM_ADDRESS')) !== null && _a !== void 0 ? _a : 'noreply@yourdomain.com');
    }
    getEmailSystemAddress() {
        var _a;
        return ((_a = this.configService.get('EMAIL_SYSTEM_ADDRESS')) !== null && _a !== void 0 ? _a : 'system@yourdomain.com');
    }
    getEmailFromName() {
        var _a;
        return ((_a = this.configService.get('EMAIL_FROM_NAME')) !== null && _a !== void 0 ? _a : 'John from YourDomain');
    }
    getEmailDriver() {
        var _a;
        return ((_a = this.configService.get('EMAIL_DRIVER')) !== null && _a !== void 0 ? _a : email_interface_1.EmailDriver.Logger);
    }
    getEmailHost() {
        return this.configService.get('EMAIL_SMTP_HOST');
    }
    getEmailPort() {
        return this.configService.get('EMAIL_SMTP_PORT');
    }
    getEmailUser() {
        return this.configService.get('EMAIL_SMTP_USER');
    }
    getEmailPassword() {
        return this.configService.get('EMAIL_SMTP_PASSWORD');
    }
    getSupportDriver() {
        var _a;
        return ((_a = this.configService.get('SUPPORT_DRIVER')) !== null && _a !== void 0 ? _a : support_interface_1.SupportDriver.None);
    }
    getSupportFrontChatId() {
        return this.configService.get('SUPPORT_FRONT_CHAT_ID');
    }
    getSupportFrontHMACKey() {
        return this.configService.get('SUPPORT_FRONT_HMAC_KEY');
    }
    getLoggerDriverType() {
        var _a;
        return ((_a = this.configService.get('LOGGER_DRIVER')) !== null && _a !== void 0 ? _a : interfaces_1.LoggerDriverType.Console);
    }
    getExceptionHandlerDriverType() {
        var _a;
        return ((_a = this.configService.get('EXCEPTION_HANDLER_DRIVER')) !== null && _a !== void 0 ? _a : interfaces_2.ExceptionHandlerDriver.Console);
    }
    getLogLevels() {
        var _a;
        return ((_a = this.configService.get('LOG_LEVELS')) !== null && _a !== void 0 ? _a : [
            'log',
            'error',
            'warn',
        ]);
    }
    getSentryDSN() {
        return this.configService.get('SENTRY_DSN');
    }
    getDemoWorkspaceIds() {
        var _a;
        return (_a = this.configService.get('DEMO_WORKSPACE_IDS')) !== null && _a !== void 0 ? _a : [];
    }
    getOpenRouterApiKey() {
        return this.configService.get('OPENROUTER_API_KEY');
    }
    getInactiveDaysBeforeEmail() {
        return this.configService.get('WORKSPACE_INACTIVE_DAYS_BEFORE_NOTIFICATION');
    }
    getInactiveDaysBeforeDelete() {
        return this.configService.get('WORKSPACE_INACTIVE_DAYS_BEFORE_DELETION');
    }
    isSignUpDisabled() {
        var _a;
        return (_a = this.configService.get('IS_SIGN_UP_DISABLED')) !== null && _a !== void 0 ? _a : false;
    }
};
exports.EnvironmentService = EnvironmentService;
exports.EnvironmentService = EnvironmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EnvironmentService);
//# sourceMappingURL=environment.service.js.map