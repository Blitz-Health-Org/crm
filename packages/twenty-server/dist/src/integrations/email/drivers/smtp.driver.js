"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmtpDriver = void 0;
const nodemailer_1 = require("nodemailer");
class SmtpDriver {
    constructor(options) {
        this.transport = (0, nodemailer_1.createTransport)(options);
    }
    async send(sendMailOptions) {
        await this.transport.sendMail(sendMailOptions);
    }
}
exports.SmtpDriver = SmtpDriver;
//# sourceMappingURL=smtp.driver.js.map