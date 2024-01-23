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
exports.GoogleProviderEnabledGuard = void 0;
const common_1 = require("@nestjs/common");
const environment_service_1 = require("../../../integrations/environment/environment.service");
const google_auth_strategy_1 = require("../strategies/google.auth.strategy");
let GoogleProviderEnabledGuard = class GoogleProviderEnabledGuard {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    canActivate() {
        if (!this.environmentService.isAuthGoogleEnabled()) {
            throw new common_1.NotFoundException('Google auth is not enabled');
        }
        new google_auth_strategy_1.GoogleStrategy(this.environmentService);
        return true;
    }
};
exports.GoogleProviderEnabledGuard = GoogleProviderEnabledGuard;
exports.GoogleProviderEnabledGuard = GoogleProviderEnabledGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService])
], GoogleProviderEnabledGuard);
//# sourceMappingURL=google-provider-enabled.guard.js.map