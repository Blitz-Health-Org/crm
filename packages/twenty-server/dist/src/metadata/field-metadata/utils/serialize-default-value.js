"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeDefaultValue = void 0;
const common_1 = require("@nestjs/common");
const serialize_type_default_value_util_1 = require("./serialize-type-default-value.util");
const serializeDefaultValue = (defaultValue) => {
    if (defaultValue === undefined || defaultValue === null) {
        return null;
    }
    if (!Array.isArray(defaultValue) &&
        typeof defaultValue === 'object' &&
        'type' in defaultValue) {
        const serializedTypeDefaultValue = (0, serialize_type_default_value_util_1.serializeTypeDefaultValue)(defaultValue);
        if (!serializedTypeDefaultValue) {
            throw new common_1.BadRequestException('Invalid default value');
        }
        return serializedTypeDefaultValue;
    }
    if (typeof defaultValue === 'string') {
        return `'${defaultValue}'`;
    }
    if (typeof defaultValue === 'number') {
        return defaultValue;
    }
    if (typeof defaultValue === 'boolean') {
        return defaultValue;
    }
    if (defaultValue instanceof Date) {
        return `'${defaultValue.toISOString()}'`;
    }
    if (Array.isArray(defaultValue)) {
        return defaultValue;
    }
    if (typeof defaultValue === 'object') {
        return `'${JSON.stringify(defaultValue)}'`;
    }
    throw new common_1.BadRequestException('Invalid default value');
};
exports.serializeDefaultValue = serializeDefaultValue;
//# sourceMappingURL=serialize-default-value.js.map