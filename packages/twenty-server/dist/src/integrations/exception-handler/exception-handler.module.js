"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionHandlerModule = void 0;
const common_1 = require("@nestjs/common");
const sentry_driver_1 = require("./drivers/sentry.driver");
const console_driver_1 = require("./drivers/console.driver");
const exception_handler_service_1 = require("./exception-handler.service");
const interfaces_1 = require("./interfaces");
const exception_handler_constants_1 = require("./exception-handler.constants");
const exception_handler_module_definition_1 = require("./exception-handler.module-definition");
let ExceptionHandlerModule = class ExceptionHandlerModule extends exception_handler_module_definition_1.ConfigurableModuleClass {
    static forRoot(options) {
        var _a;
        const provider = {
            provide: exception_handler_constants_1.EXCEPTION_HANDLER_DRIVER,
            useValue: options.type === interfaces_1.ExceptionHandlerDriver.Console
                ? new console_driver_1.ExceptionHandlerConsoleDriver()
                : new sentry_driver_1.ExceptionHandlerSentryDriver(options.options),
        };
        const dynamicModule = super.forRoot(options);
        return Object.assign(Object.assign({}, dynamicModule), { providers: [...((_a = dynamicModule.providers) !== null && _a !== void 0 ? _a : []), provider] });
    }
    static forRootAsync(options) {
        var _a;
        const provider = {
            provide: exception_handler_constants_1.EXCEPTION_HANDLER_DRIVER,
            useFactory: async (...args) => {
                var _a;
                const config = await ((_a = options === null || options === void 0 ? void 0 : options.useFactory) === null || _a === void 0 ? void 0 : _a.call(options, ...args));
                if (!config) {
                    return null;
                }
                return config.type === interfaces_1.ExceptionHandlerDriver.Console
                    ? new console_driver_1.ExceptionHandlerConsoleDriver()
                    : new sentry_driver_1.ExceptionHandlerSentryDriver(config.options);
            },
            inject: options.inject || [],
        };
        const dynamicModule = super.forRootAsync(options);
        return Object.assign(Object.assign({}, dynamicModule), { providers: [...((_a = dynamicModule.providers) !== null && _a !== void 0 ? _a : []), provider] });
    }
};
exports.ExceptionHandlerModule = ExceptionHandlerModule;
exports.ExceptionHandlerModule = ExceptionHandlerModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [exception_handler_service_1.ExceptionHandlerService],
        exports: [exception_handler_service_1.ExceptionHandlerService],
    })
], ExceptionHandlerModule);
//# sourceMappingURL=exception-handler.module.js.map