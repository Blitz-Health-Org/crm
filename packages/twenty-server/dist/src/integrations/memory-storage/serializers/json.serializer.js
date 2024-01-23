"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryStorageJsonSerializer = void 0;
class MemoryStorageJsonSerializer {
    serialize(item) {
        return JSON.stringify(item);
    }
    deserialize(data) {
        return JSON.parse(data);
    }
}
exports.MemoryStorageJsonSerializer = MemoryStorageJsonSerializer;
//# sourceMappingURL=json.serializer.js.map