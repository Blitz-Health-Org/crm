"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntFilterType = void 0;
const graphql_1 = require("graphql");
const filter_is_input_type_1 = require("./filter-is.input-type");
exports.IntFilterType = new graphql_1.GraphQLInputObjectType({
    name: 'IntFilter',
    fields: {
        eq: { type: graphql_1.GraphQLInt },
        gt: { type: graphql_1.GraphQLInt },
        gte: { type: graphql_1.GraphQLInt },
        in: { type: new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt)) },
        lt: { type: graphql_1.GraphQLInt },
        lte: { type: graphql_1.GraphQLInt },
        neq: { type: graphql_1.GraphQLInt },
        is: { type: filter_is_input_type_1.FilterIs },
    },
});
//# sourceMappingURL=int-filter.input-type.js.map