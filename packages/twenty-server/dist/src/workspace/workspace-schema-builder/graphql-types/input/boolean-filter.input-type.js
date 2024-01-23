"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanFilterType = void 0;
const graphql_1 = require("graphql");
const filter_is_input_type_1 = require("./filter-is.input-type");
exports.BooleanFilterType = new graphql_1.GraphQLInputObjectType({
    name: 'BooleanFilter',
    fields: {
        eq: { type: graphql_1.GraphQLBoolean },
        is: { type: filter_is_input_type_1.FilterIs },
    },
});
//# sourceMappingURL=boolean-filter.input-type.js.map