"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerDriver = void 0;
const common_1 = require("@nestjs/common");
class LoggerDriver {
    constructor() {
        this.logger = new common_1.Logger(LoggerDriver.name);
    }
    async send(sendMailOptions) {
        const info = `Sent email to: ${sendMailOptions.to}\n` +
            `From: ${sendMailOptions.from}\n` +
            `Subject: ${sendMailOptions.subject}\n` +
            `Content Text: ${sendMailOptions.text}\n` +
            `Content HTML: ${sendMailOptions.html}`;
        this.logger.log(info);
    }
}
exports.LoggerDriver = LoggerDriver;
//# sourceMappingURL=logger.driver.js.map