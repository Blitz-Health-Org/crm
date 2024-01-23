"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDFilterType = void 0;
const graphql_1 = require("graphql");
const filter_is_input_type_1 = require("./filter-is.input-type");
const scalars_1 = require("../scalars");
exports.UUIDFilterType = new graphql_1.GraphQLInputObjectType({
    name: 'UUIDFilter',
    fields: {
        eq: { type: scalars_1.UUIDScalarType },
        in: { type: new graphql_1.GraphQLList(scalars_1.UUIDScalarType) },
        neq: { type: scalars_1.UUIDScalarType },
        is: { type: filter_is_input_type_1.FilterIs },
    },
});
//# sourceMappingURL=uuid-filter.input-type.js.map