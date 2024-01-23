"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeFilterType = void 0;
const graphql_1 = require("graphql");
const filter_is_input_type_1 = require("./filter-is.input-type");
const scalars_1 = require("../scalars");
exports.TimeFilterType = new graphql_1.GraphQLInputObjectType({
    name: 'TimeFilter',
    fields: {
        eq: { type: scalars_1.TimeScalarType },
        gt: { type: scalars_1.TimeScalarType },
        gte: { type: scalars_1.TimeScalarType },
        in: { type: new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(scalars_1.TimeScalarType)) },
        lt: { type: scalars_1.TimeScalarType },
        lte: { type: scalars_1.TimeScalarType },
        neq: { type: scalars_1.TimeScalarType },
        is: { type: filter_is_input_type_1.FilterIs },
    },
});
//# sourceMappingURL=time-filter.input-type.js.map