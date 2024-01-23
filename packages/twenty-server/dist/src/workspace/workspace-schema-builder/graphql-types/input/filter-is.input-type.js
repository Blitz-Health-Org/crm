"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterIs = void 0;
const graphql_1 = require("graphql");
exports.FilterIs = new graphql_1.GraphQLEnumType({
    name: 'FilterIs',
    description: 'This enum to filter by nullability',
    values: {
        NULL: {
            value: 'NULL',
            description: 'Nulish values',
        },
        NOT_NULL: {
            value: 'NOT_NULL',
            description: 'Non-nulish values',
        },
    },
});
//# sourceMappingURL=filter-is.input-type.js.map