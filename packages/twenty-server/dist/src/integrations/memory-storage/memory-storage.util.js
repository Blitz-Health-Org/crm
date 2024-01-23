"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMemoryStorageInjectionToken = void 0;
const memory_storage_constants_1 = require("./memory-storage.constants");
const createMemoryStorageInjectionToken = (identifier) => {
    return `${memory_storage_constants_1.MEMORY_STORAGE_SERVICE}_${identifier}`;
};
exports.createMemoryStorageInjectionToken = createMemoryStorageInjectionToken;
//# sourceMappingURL=memory-storage.util.js.map