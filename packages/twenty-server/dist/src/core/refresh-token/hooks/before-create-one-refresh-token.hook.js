"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeforeCreateOneRefreshToken = void 0;
const uuid_1 = require("uuid");
class BeforeCreateOneRefreshToken {
    async run(instance, context) {
        var _a, _b, _c;
        const userId = (_c = (_b = (_a = context === null || context === void 0 ? void 0 : context.req) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c.id;
        instance.input.userId = userId;
        instance.input.id = (0, uuid_1.v4)();
        instance.input.updatedAt = new Date();
        return instance;
    }
}
exports.BeforeCreateOneRefreshToken = BeforeCreateOneRefreshToken;
//# sourceMappingURL=before-create-one-refresh-token.hook.js.map