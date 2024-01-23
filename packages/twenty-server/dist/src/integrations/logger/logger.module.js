"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerModule = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("./interfaces");
const logger_service_1 = require("./logger.service");
const logger_constants_1 = require("./logger.constants");
const logger_module_definition_1 = require("./logger.module-definition");
let LoggerModule = class LoggerModule extends logger_module_definition_1.ConfigurableModuleClass {
    static forRoot(options) {
        var _a;
        const provider = {
            provide: logger_constants_1.LOGGER_DRIVER,
            useValue: options.type === interfaces_1.LoggerDriverType.Console
                ? new common_1.ConsoleLogger()
                : undefined,
        };
        const dynamicModule = super.forRoot(options);
        return Object.assign(Object.assign({}, dynamicModule), { providers: [...((_a = dynamicModule.providers) !== null && _a !== void 0 ? _a : []), provider] });
    }
    static forRootAsync(options) {
        var _a;
        const provider = {
            provide: logger_constants_1.LOGGER_DRIVER,
            useFactory: async (...args) => {
                var _a, _b;
                const config = await ((_a = options === null || options === void 0 ? void 0 : options.useFactory) === null || _a === void 0 ? void 0 : _a.call(options, ...args));
                if (!config) {
                    return null;
                }
                const logLevels = (_b = config.logLevels) !== null && _b !== void 0 ? _b : [];
                const logger = (config === null || config === void 0 ? void 0 : config.type) === interfaces_1.LoggerDriverType.Console
                    ? new common_1.ConsoleLogger()
                    : undefined;
                logger === null || logger === void 0 ? void 0 : logger.setLogLevels(logLevels);
                return logger;
            },
            inject: options.inject || [],
        };
        const dynamicModule = super.forRootAsync(options);
        return Object.assign(Object.assign({}, dynamicModule), { providers: [...((_a = dynamicModule.providers) !== null && _a !== void 0 ? _a : []), provider] });
    }
};
exports.LoggerModule = LoggerModule;
exports.LoggerModule = LoggerModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [logger_service_1.LoggerService],
        exports: [logger_service_1.LoggerService],
    })
], LoggerModule);
//# sourceMappingURL=logger.module.js.map