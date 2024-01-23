"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingProvidersModule = void 0;
const common_1 = require("@nestjs/common");
const environment_module_1 = require("../../../integrations/environment/environment.module");
const gmail_client_provider_1 = require("./gmail/gmail-client.provider");
let MessagingProvidersModule = class MessagingProvidersModule {
};
exports.MessagingProvidersModule = MessagingProvidersModule;
exports.MessagingProvidersModule = MessagingProvidersModule = __decorate([
    (0, common_1.Module)({
        imports: [environment_module_1.EnvironmentModule],
        providers: [gmail_client_provider_1.GmailClientProvider],
        exports: [gmail_client_provider_1.GmailClientProvider],
    })
], MessagingProvidersModule);
//# sourceMappingURL=messaging-providers.module.js.map