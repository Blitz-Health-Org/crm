"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIntScalarType = void 0;
const graphql_1 = require("graphql");
exports.BigIntScalarType = new graphql_1.GraphQLScalarType({
    name: 'BigInt',
    description: 'The `BigInt` scalar type represents non-fractional signed whole numeric values.',
    serialize(value) {
        return value.toString();
    },
    parseValue(value) {
        return BigInt(value);
    },
    parseLiteral(ast) {
        if (ast.kind === 'IntValue') {
            return BigInt(ast.value);
        }
        return null;
    },
});
//# sourceMappingURL=big-int.scalar.js.map