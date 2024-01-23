"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerModuleFactory = void 0;
const interfaces_1 = require("./interfaces");
const loggerModuleFactory = async (environmentService) => {
    const driverType = environmentService.getLoggerDriverType();
    const logLevels = environmentService.getLogLevels();
    switch (driverType) {
        case interfaces_1.LoggerDriverType.Console: {
            return {
                type: interfaces_1.LoggerDriverType.Console,
                logLevels: logLevels,
            };
        }
        default:
            throw new Error(`Invalid logger driver type (${driverType}), check your .env file`);
    }
};
exports.loggerModuleFactory = loggerModuleFactory;
//# sourceMappingURL=logger.module-factory.js.map