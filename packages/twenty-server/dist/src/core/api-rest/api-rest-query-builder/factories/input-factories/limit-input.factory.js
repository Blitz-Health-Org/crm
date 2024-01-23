"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitInputFactory = void 0;
const common_1 = require("@nestjs/common");
let LimitInputFactory = class LimitInputFactory {
    create(request) {
        if (!request.query.limit) {
            return 60;
        }
        const limit = +request.query.limit;
        if (isNaN(limit) || limit < 0) {
            throw new common_1.BadRequestException(`limit '${request.query.limit}' is invalid. Should be an integer`);
        }
        return limit;
    }
};
exports.LimitInputFactory = LimitInputFactory;
exports.LimitInputFactory = LimitInputFactory = __decorate([
    (0, common_1.Injectable)()
], LimitInputFactory);
//# sourceMappingURL=limit-input.factory.js.map