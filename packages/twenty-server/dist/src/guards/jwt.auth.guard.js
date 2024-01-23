"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jsonwebtoken_1 = require("jsonwebtoken");
const assert_1 = require("../utils/assert");
const extract_request_1 = require("../utils/extract-request");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)(['jwt']) {
    constructor() {
        super();
    }
    getRequest(context) {
        return (0, extract_request_1.getRequest)(context);
    }
    handleRequest(err, user, info) {
        (0, assert_1.assert)(user, '', common_1.UnauthorizedException);
        if (err) {
            throw err;
        }
        if (info && info instanceof Error) {
            if (info instanceof jsonwebtoken_1.JsonWebTokenError) {
                info = String(info);
            }
            throw new common_1.UnauthorizedException(info);
        }
        return user;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtAuthGuard);
//# sourceMappingURL=jwt.auth.guard.js.map