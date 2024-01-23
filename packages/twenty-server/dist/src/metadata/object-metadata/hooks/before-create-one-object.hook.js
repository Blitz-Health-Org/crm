"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeforeCreateOneObject = void 0;
const common_1 = require("@nestjs/common");
const coreObjectNames = [
    'featureFlag',
    'refreshToken',
    'workspace',
    'user',
    'event',
    'field',
];
let BeforeCreateOneObject = class BeforeCreateOneObject {
    async run(instance, context) {
        var _a, _b, _c;
        const workspaceId = (_c = (_b = (_a = context === null || context === void 0 ? void 0 : context.req) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.workspace) === null || _c === void 0 ? void 0 : _c.id;
        if (!workspaceId) {
            throw new common_1.UnauthorizedException();
        }
        if (coreObjectNames.includes(instance.input.nameSingular) ||
            coreObjectNames.includes(instance.input.namePlural)) {
            throw new common_1.ForbiddenException('You cannot create an object with this name.');
        }
        instance.input.workspaceId = workspaceId;
        return instance;
    }
};
exports.BeforeCreateOneObject = BeforeCreateOneObject;
exports.BeforeCreateOneObject = BeforeCreateOneObject = __decorate([
    (0, common_1.Injectable)()
], BeforeCreateOneObject);
//# sourceMappingURL=before-create-one-object.hook.js.map