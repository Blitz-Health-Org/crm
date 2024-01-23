"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryStorageDefaultSerializer = void 0;
class MemoryStorageDefaultSerializer {
    serialize(item) {
        if (typeof item !== 'string') {
            throw new Error('DefaultSerializer can only serialize strings');
        }
        return item;
    }
    deserialize(data) {
        return data;
    }
}
exports.MemoryStorageDefaultSerializer = MemoryStorageDefaultSerializer;
//# sourceMappingURL=default.serializer.js.map