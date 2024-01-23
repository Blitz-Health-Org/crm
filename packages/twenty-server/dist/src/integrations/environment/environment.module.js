"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const environment_service_1 = require("./environment.service");
const environment_module_definition_1 = require("./environment.module-definition");
const environment_validation_1 = require("./environment.validation");
let EnvironmentModule = class EnvironmentModule extends environment_module_definition_1.ConfigurableModuleClass {
};
exports.EnvironmentModule = EnvironmentModule;
exports.EnvironmentModule = EnvironmentModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                expandVariables: true,
                validate: environment_validation_1.validate,
            }),
        ],
        providers: [environment_service_1.EnvironmentService],
        exports: [environment_service_1.EnvironmentService],
    })
], EnvironmentModule);
//# sourceMappingURL=environment.module.js.map