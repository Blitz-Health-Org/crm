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
exports.ClientConfigResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const environment_service_1 = require("../../integrations/environment/environment.service");
const client_config_entity_1 = require("./client-config.entity");
let ClientConfigResolver = class ClientConfigResolver {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    async clientConfig() {
        const clientConfig = {
            authProviders: {
                google: this.environmentService.isAuthGoogleEnabled(),
                magicLink: false,
                password: true,
            },
            telemetry: {
                enabled: this.environmentService.isTelemetryEnabled(),
                anonymizationEnabled: this.environmentService.isTelemetryAnonymizationEnabled(),
            },
            billing: {
                isBillingEnabled: this.environmentService.isBillingEnabled(),
                billingUrl: this.environmentService.getBillingUrl(),
            },
            signInPrefilled: this.environmentService.isSignInPrefilled(),
            signUpDisabled: this.environmentService.isSignUpDisabled(),
            debugMode: this.environmentService.isDebugMode(),
            support: {
                supportDriver: this.environmentService.getSupportDriver(),
                supportFrontChatId: this.environmentService.getSupportFrontChatId(),
            },
            sentry: {
                dsn: this.environmentService.getSentryDSN(),
            },
        };
        return Promise.resolve(clientConfig);
    }
};
exports.ClientConfigResolver = ClientConfigResolver;
__decorate([
    (0, graphql_1.Query)(() => client_config_entity_1.ClientConfig),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientConfigResolver.prototype, "clientConfig", null);
exports.ClientConfigResolver = ClientConfigResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService])
], ClientConfigResolver);
//# sourceMappingURL=client-config.resolver.js.map