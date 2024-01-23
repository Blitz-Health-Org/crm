"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAutoResolverOpts = void 0;
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const user_entity_1 = require("./user.entity");
const jwt_auth_guard_1 = require("../../guards/jwt.auth.guard");
exports.userAutoResolverOpts = [
    {
        EntityClass: user_entity_1.User,
        DTOClass: user_entity_1.User,
        enableTotalCount: true,
        pagingStrategy: nestjs_query_graphql_1.PagingStrategies.CURSOR,
        read: {
            many: { disabled: true },
            one: { disabled: true },
        },
        create: {
            many: { disabled: true },
            one: { disabled: true },
        },
        update: {
            many: { disabled: true },
            one: { disabled: true },
        },
        delete: { many: { disabled: true }, one: { disabled: true } },
        guards: [jwt_auth_guard_1.JwtAuthGuard],
    },
];
//# sourceMappingURL=user.auto-resolver-opts.js.map