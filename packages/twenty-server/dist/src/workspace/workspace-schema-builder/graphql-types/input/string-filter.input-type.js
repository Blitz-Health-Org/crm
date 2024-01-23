"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFilterType = void 0;
const graphql_1 = require("graphql");
const filter_is_input_type_1 = require("./filter-is.input-type");
exports.StringFilterType = new graphql_1.GraphQLInputObjectType({
    name: 'StringFilter',
    fields: {
        eq: { type: graphql_1.GraphQLString },
        gt: { type: graphql_1.GraphQLString },
        gte: { type: graphql_1.GraphQLString },
        in: { type: new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)) },
        lt: { type: graphql_1.GraphQLString },
        lte: { type: graphql_1.GraphQLString },
        neq: { type: graphql_1.GraphQLString },
        startsWith: { type: graphql_1.GraphQLString },
        like: { type: graphql_1.GraphQLString },
        ilike: { type: graphql_1.GraphQLString },
        regex: { type: graphql_1.GraphQLString },
        iregex: { type: graphql_1.GraphQLString },
        is: { type: filter_is_input_type_1.FilterIs },
    },
});
//# sourceMappingURL=string-filter.input-type.js.map