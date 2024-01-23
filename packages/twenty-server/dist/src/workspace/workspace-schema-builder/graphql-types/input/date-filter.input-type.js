"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFilterType = void 0;
const graphql_1 = require("graphql");
const filter_is_input_type_1 = require("./filter-is.input-type");
const scalars_1 = require("../scalars");
exports.DateFilterType = new graphql_1.GraphQLInputObjectType({
    name: 'DateFilter',
    fields: {
        eq: { type: scalars_1.DateScalarType },
        gt: { type: scalars_1.DateScalarType },
        gte: { type: scalars_1.DateScalarType },
        in: { type: new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(scalars_1.DateScalarType)) },
        lt: { type: scalars_1.DateScalarType },
        lte: { type: scalars_1.DateScalarType },
        neq: { type: scalars_1.DateScalarType },
        is: { type: filter_is_input_type_1.FilterIs },
    },
});
//# sourceMappingURL=date-filter.input-type.js.map