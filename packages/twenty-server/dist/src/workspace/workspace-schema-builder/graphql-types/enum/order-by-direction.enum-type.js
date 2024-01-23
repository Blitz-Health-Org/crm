"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderByDirectionType = void 0;
const graphql_1 = require("graphql");
exports.OrderByDirectionType = new graphql_1.GraphQLEnumType({
    name: 'OrderByDirection',
    description: 'This enum is used to specify the order of results',
    values: {
        AscNullsFirst: {
            value: 'AscNullsFirst',
            description: 'Ascending order, nulls first',
        },
        AscNullsLast: {
            value: 'AscNullsLast',
            description: 'Ascending order, nulls last',
        },
        DescNullsFirst: {
            value: 'DescNullsFirst',
            description: 'Descending order, nulls first',
        },
        DescNullsLast: {
            value: 'DescNullsLast',
            description: 'Descending order, nulls last',
        },
    },
});
//# sourceMappingURL=order-by-direction.enum-type.js.map