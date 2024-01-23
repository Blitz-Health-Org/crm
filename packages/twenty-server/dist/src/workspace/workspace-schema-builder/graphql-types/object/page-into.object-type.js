"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageInfoType = void 0;
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const graphql_1 = require("graphql");
exports.PageInfoType = new graphql_1.GraphQLObjectType({
    name: 'PageInfo',
    fields: {
        startCursor: { type: nestjs_query_graphql_1.ConnectionCursorScalar },
        endCursor: { type: nestjs_query_graphql_1.ConnectionCursorScalar },
        hasNextPage: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
        hasPreviousPage: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
    },
});
//# sourceMappingURL=page-into.object-type.js.map