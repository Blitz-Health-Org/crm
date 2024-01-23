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
exports.AuthTokens = exports.AuthTokenPair = exports.ApiKeyToken = exports.AuthToken = void 0;
const graphql_1 = require("@nestjs/graphql");
let AuthToken = class AuthToken {
};
exports.AuthToken = AuthToken;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], AuthToken.prototype, "token", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], AuthToken.prototype, "expiresAt", void 0);
exports.AuthToken = AuthToken = __decorate([
    (0, graphql_1.ObjectType)()
], AuthToken);
let ApiKeyToken = class ApiKeyToken {
};
exports.ApiKeyToken = ApiKeyToken;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ApiKeyToken.prototype, "token", void 0);
exports.ApiKeyToken = ApiKeyToken = __decorate([
    (0, graphql_1.ObjectType)()
], ApiKeyToken);
let AuthTokenPair = class AuthTokenPair {
};
exports.AuthTokenPair = AuthTokenPair;
__decorate([
    (0, graphql_1.Field)(() => AuthToken),
    __metadata("design:type", AuthToken)
], AuthTokenPair.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => AuthToken),
    __metadata("design:type", AuthToken)
], AuthTokenPair.prototype, "refreshToken", void 0);
exports.AuthTokenPair = AuthTokenPair = __decorate([
    (0, graphql_1.ObjectType)()
], AuthTokenPair);
let AuthTokens = class AuthTokens {
};
exports.AuthTokens = AuthTokens;
__decorate([
    (0, graphql_1.Field)(() => AuthTokenPair),
    __metadata("design:type", AuthTokenPair)
], AuthTokens.prototype, "tokens", void 0);
exports.AuthTokens = AuthTokens = __decorate([
    (0, graphql_1.ObjectType)()
], AuthTokens);
//# sourceMappingURL=token.entity.js.map