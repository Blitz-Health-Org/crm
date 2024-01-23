"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatFilterType = void 0;
const graphql_1 = require("graphql");
const filter_is_input_type_1 = require("./filter-is.input-type");
exports.FloatFilterType = new graphql_1.GraphQLInputObjectType({
    name: 'FloatFilter',
    fields: {
        eq: { type: graphql_1.GraphQLFloat },
        gt: { type: graphql_1.GraphQLFloat },
        gte: { type: graphql_1.GraphQLFloat },
        in: { type: new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat)) },
        lt: { type: graphql_1.GraphQLFloat },
        lte: { type: graphql_1.GraphQLFloat },
        neq: { type: graphql_1.GraphQLFloat },
        is: { type: filter_is_input_type_1.FilterIs },
    },
});
//# sourceMappingURL=float-filter.input-type.js.map