"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const nestjs_query_typeorm_1 = require("@ptc-org/nestjs-query-typeorm");
const refresh_token_entity_1 = require("./refresh-token.entity");
const refresh_token_auto_resolver_opts_1 = require("./refresh-token.auto-resolver-opts");
const refresh_token_service_1 = require("./services/refresh-token.service");
let RefreshTokenModule = class RefreshTokenModule {
};
exports.RefreshTokenModule = RefreshTokenModule;
exports.RefreshTokenModule = RefreshTokenModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [nestjs_query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([refresh_token_entity_1.RefreshToken], 'core')],
                services: [refresh_token_service_1.RefreshTokenService],
                resolvers: refresh_token_auto_resolver_opts_1.refreshTokenAutoResolverOpts,
            }),
        ],
    })
], RefreshTokenModule);
//# sourceMappingURL=refresh-token.module.js.map