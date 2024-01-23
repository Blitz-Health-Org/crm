"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigFloatScalarType = void 0;
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.BigFloatScalarType = new graphql_1.GraphQLScalarType({
    name: 'BigFloat',
    description: 'A custom scalar type for representing big floating point numbers',
    serialize(value) {
        return parseFloat(value);
    },
    parseValue(value) {
        return String(value);
    },
    parseLiteral(ast) {
        if (ast.kind === language_1.Kind.FLOAT || ast.kind === language_1.Kind.INT) {
            return String(ast.value);
        }
        return null;
    },
});
//# sourceMappingURL=big-float.scalar.js.map