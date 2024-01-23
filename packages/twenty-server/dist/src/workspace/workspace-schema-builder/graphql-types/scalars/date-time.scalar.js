"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeScalarType = void 0;
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.DateTimeScalarType = new graphql_1.GraphQLScalarType({
    name: 'DateTime',
    description: 'A custom scalar that represents a datetime in ISO format',
    serialize(value) {
        const date = new Date(value);
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date format, expected ISO date string');
        }
        return date.toISOString();
    },
    parseValue(value) {
        const date = new Date(value);
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date format, expected ISO date string');
        }
        return date;
    },
    parseLiteral(ast) {
        if (ast.kind !== language_1.Kind.STRING) {
            throw new Error('Invalid date format, expected ISO date string');
        }
        const date = new Date(ast.value);
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date format, expected ISO date string');
        }
        return date;
    },
});
//# sourceMappingURL=date-time.scalar.js.map