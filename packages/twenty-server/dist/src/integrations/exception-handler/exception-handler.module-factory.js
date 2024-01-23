"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionHandlerModuleFactory = void 0;
const interfaces_1 = require("./interfaces");
const exceptionHandlerModuleFactory = async (environmentService, adapterHost) => {
    var _a, _b;
    const driverType = environmentService.getExceptionHandlerDriverType();
    switch (driverType) {
        case interfaces_1.ExceptionHandlerDriver.Console: {
            return {
                type: interfaces_1.ExceptionHandlerDriver.Console,
            };
        }
        case interfaces_1.ExceptionHandlerDriver.Sentry: {
            return {
                type: interfaces_1.ExceptionHandlerDriver.Sentry,
                options: {
                    dsn: (_a = environmentService.getSentryDSN()) !== null && _a !== void 0 ? _a : '',
                    serverInstance: (_b = adapterHost.httpAdapter) === null || _b === void 0 ? void 0 : _b.getInstance(),
                    debug: environmentService.isDebugMode(),
                },
            };
        }
        default:
            throw new Error(`Invalid exception capturer driver type (${driverType}), check your .env file`);
    }
};
exports.exceptionHandlerModuleFactory = exceptionHandlerModuleFactory;
//# sourceMappingURL=exception-handler.module-factory.js.map