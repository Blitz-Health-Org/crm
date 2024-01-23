"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateScalarType = void 0;
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.DateScalarType = new graphql_1.GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
        return value.getTime();
    },
    parseValue(value) {
        return new Date(value);
    },
    parseLiteral(ast) {
        if (ast.kind === language_1.Kind.INT) {
            return new Date(parseInt(ast.value, 10));
        }
        return null;
    },
});
//# sourceMappingURL=date.scalar.js.map