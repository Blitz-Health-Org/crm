"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenAutoResolverOpts = void 0;
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const jwt_auth_guard_1 = require("../../guards/jwt.auth.guard");
const refresh_token_entity_1 = require("./refresh-token.entity");
const create_refresh_token_input_1 = require("./dtos/create-refresh-token.input");
exports.refreshTokenAutoResolverOpts = [
    {
        EntityClass: refresh_token_entity_1.RefreshToken,
        DTOClass: refresh_token_entity_1.RefreshToken,
        CreateDTOClass: create_refresh_token_input_1.CreateRefreshTokenInput,
        enableTotalCount: true,
        pagingStrategy: nestjs_query_graphql_1.PagingStrategies.CURSOR,
        read: {
            many: { disabled: true },
            one: { disabled: true },
        },
        create: {
            many: { disabled: true },
        },
        update: {
            many: { disabled: true },
            one: { disabled: true },
        },
        delete: { many: { disabled: true }, one: { disabled: true } },
        guards: [jwt_auth_guard_1.JwtAuthGuard],
    },
];
//# sourceMappingURL=refresh-token.auto-resolver-opts.js.map