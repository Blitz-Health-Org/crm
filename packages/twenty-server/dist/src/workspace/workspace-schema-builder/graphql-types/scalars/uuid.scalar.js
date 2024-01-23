"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDScalarType = void 0;
const graphql_1 = require("graphql");
const uuid_1 = require("uuid");
const checkUUID = (value) => {
    if (typeof value !== 'string') {
        throw new Error('UUID must be a string');
    }
    if (!(0, uuid_1.validate)(value)) {
        throw new Error('Invalid UUID');
    }
    return value;
};
exports.UUIDScalarType = new graphql_1.GraphQLScalarType({
    name: 'UUID',
    description: 'A UUID scalar type',
    serialize: checkUUID,
    parseValue: checkUUID,
    parseLiteral(ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw new Error('UUID must be a string');
        }
        return ast.value;
    },
});
//# sourceMappingURL=uuid.scalar.js.map