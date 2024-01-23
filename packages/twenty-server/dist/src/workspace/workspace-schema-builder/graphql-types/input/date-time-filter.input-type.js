"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatetimeFilterType = void 0;
const graphql_1 = require("graphql");
const filter_is_input_type_1 = require("./filter-is.input-type");
const scalars_1 = require("../scalars");
exports.DatetimeFilterType = new graphql_1.GraphQLInputObjectType({
    name: 'DateTimeFilter',
    fields: {
        eq: { type: scalars_1.DateTimeScalarType },
        gt: { type: scalars_1.DateTimeScalarType },
        gte: { type: scalars_1.DateTimeScalarType },
        in: { type: new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(scalars_1.DateTimeScalarType)) },
        lt: { type: scalars_1.DateTimeScalarType },
        lte: { type: scalars_1.DateTimeScalarType },
        neq: { type: scalars_1.DateTimeScalarType },
        is: { type: filter_is_input_type_1.FilterIs },
    },
});
//# sourceMappingURL=date-time-filter.input-type.js.map