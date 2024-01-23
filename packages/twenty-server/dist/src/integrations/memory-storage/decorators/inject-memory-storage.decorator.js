"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectMemoryStorage = void 0;
const common_1 = require("@nestjs/common");
const memory_storage_util_1 = require("../memory-storage.util");
const InjectMemoryStorage = (identifier) => {
    const injectionToken = (0, memory_storage_util_1.createMemoryStorageInjectionToken)(identifier);
    return (0, common_1.Inject)(injectionToken);
};
exports.InjectMemoryStorage = InjectMemoryStorage;
//# sourceMappingURL=inject-memory-storage.decorator.js.map