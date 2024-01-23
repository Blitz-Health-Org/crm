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
exports.ClientConfig = void 0;
const graphql_1 = require("@nestjs/graphql");
let AuthProviders = class AuthProviders {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], AuthProviders.prototype, "google", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], AuthProviders.prototype, "magicLink", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], AuthProviders.prototype, "password", void 0);
AuthProviders = __decorate([
    (0, graphql_1.ObjectType)()
], AuthProviders);
let Telemetry = class Telemetry {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Telemetry.prototype, "enabled", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Telemetry.prototype, "anonymizationEnabled", void 0);
Telemetry = __decorate([
    (0, graphql_1.ObjectType)()
], Telemetry);
let Billing = class Billing {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Billing.prototype, "isBillingEnabled", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Billing.prototype, "billingUrl", void 0);
Billing = __decorate([
    (0, graphql_1.ObjectType)()
], Billing);
let Support = class Support {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Support.prototype, "supportDriver", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], Support.prototype, "supportFrontChatId", void 0);
Support = __decorate([
    (0, graphql_1.ObjectType)()
], Support);
let Sentry = class Sentry {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], Sentry.prototype, "dsn", void 0);
Sentry = __decorate([
    (0, graphql_1.ObjectType)()
], Sentry);
let ClientConfig = class ClientConfig {
};
exports.ClientConfig = ClientConfig;
__decorate([
    (0, graphql_1.Field)(() => AuthProviders, { nullable: false }),
    __metadata("design:type", AuthProviders)
], ClientConfig.prototype, "authProviders", void 0);
__decorate([
    (0, graphql_1.Field)(() => Telemetry, { nullable: false }),
    __metadata("design:type", Telemetry)
], ClientConfig.prototype, "telemetry", void 0);
__decorate([
    (0, graphql_1.Field)(() => Billing, { nullable: false }),
    __metadata("design:type", Billing)
], ClientConfig.prototype, "billing", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], ClientConfig.prototype, "signInPrefilled", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], ClientConfig.prototype, "signUpDisabled", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], ClientConfig.prototype, "debugMode", void 0);
__decorate([
    (0, graphql_1.Field)(() => Support),
    __metadata("design:type", Support)
], ClientConfig.prototype, "support", void 0);
__decorate([
    (0, graphql_1.Field)(() => Sentry),
    __metadata("design:type", Sentry)
], ClientConfig.prototype, "sentry", void 0);
exports.ClientConfig = ClientConfig = __decorate([
    (0, graphql_1.ObjectType)()
], ClientConfig);
//# sourceMappingURL=client-config.entity.js.map