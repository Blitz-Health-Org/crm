"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailModuleFactory = void 0;
const email_interface_1 = require("./interfaces/email.interface");
const emailModuleFactory = (environmentService) => {
    const driver = environmentService.getEmailDriver();
    switch (driver) {
        case email_interface_1.EmailDriver.Logger: {
            return;
        }
        case email_interface_1.EmailDriver.Smtp: {
            const host = environmentService.getEmailHost();
            const port = environmentService.getEmailPort();
            const user = environmentService.getEmailUser();
            const pass = environmentService.getEmailPassword();
            if (!(host && port)) {
                throw new Error(`${driver} email driver requires host: ${host} and port: ${port} to be defined, check your .env file`);
            }
            const auth = user && pass ? { user, pass } : undefined;
            if (auth) {
                return { host, port, auth };
            }
            return { host, port };
        }
        default:
            throw new Error(`Invalid email driver (${driver}), check your .env file`);
    }
};
exports.emailModuleFactory = emailModuleFactory;
//# sourceMappingURL=email.module-factory.js.map