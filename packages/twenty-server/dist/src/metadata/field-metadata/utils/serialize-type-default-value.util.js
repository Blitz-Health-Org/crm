"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeTypeDefaultValue = void 0;
const serializeTypeDefaultValue = (defaultValue) => {
    if (!(defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.type)) {
        return null;
    }
    switch (defaultValue.type) {
        case 'uuid':
            return 'public.uuid_generate_v4()';
        case 'now':
            return 'now()';
        default:
            return null;
    }
};
exports.serializeTypeDefaultValue = serializeTypeDefaultValue;
//# sourceMappingURL=serialize-type-default-value.util.js.map