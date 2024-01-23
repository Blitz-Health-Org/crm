"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWorkEmail = void 0;
const email_providers_1 = require("./email-providers");
const isWorkEmail = (email) => {
    if (!email) {
        return false;
    }
    const fields = email.split('@');
    if (fields.length !== 2) {
        return false;
    }
    const domain = fields[1];
    if (!domain) {
        return false;
    }
    return !email_providers_1.emailProvidersSet.has(domain);
};
exports.isWorkEmail = isWorkEmail;
//# sourceMappingURL=is-work-email.js.map