"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigFloatFilterType = void 0;
const graphql_1 = require("graphql");
const filter_is_input_type_1 = require("./filter-is.input-type");
const scalars_1 = require("../scalars");
exports.BigFloatFilterType = new graphql_1.GraphQLInputObjectType({
    name: 'BigFloatFilter',
    fields: {
        eq: { type: scalars_1.BigFloatScalarType },
        gt: { type: scalars_1.BigFloatScalarType },
        gte: { type: scalars_1.BigFloatScalarType },
        in: { type: new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(scalars_1.BigFloatScalarType)) },
        lt: { type: scalars_1.BigFloatScalarType },
        lte: { type: scalars_1.BigFloatScalarType },
        neq: { type: scalars_1.BigFloatScalarType },
        is: { type: filter_is_input_type_1.FilterIs },
    },
});
//# sourceMappingURL=big-float-filter.input-type.js.map