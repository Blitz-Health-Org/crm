"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalMemoryDriver = void 0;
class LocalMemoryDriver {
    constructor(identifier, options, serializer) {
        this.storage = new Map();
        this.identifier = identifier;
        this.options = options;
        this.serializer = serializer;
    }
    async write(params) {
        const compositeKey = this.generateCompositeKey(params.key);
        const serializedData = this.serializer.serialize(params.data);
        this.storage.set(compositeKey, serializedData);
    }
    async read(params) {
        const compositeKey = this.generateCompositeKey(params.key);
        if (!this.storage.has(compositeKey)) {
            return null;
        }
        const data = this.storage.get(compositeKey);
        if (!data) {
            return null;
        }
        const deserializeData = this.serializer.deserialize(data);
        return deserializeData;
    }
    async delete(params) {
        const compositeKey = this.generateCompositeKey(params.key);
        if (!this.storage.has(compositeKey)) {
            return;
        }
        this.storage.delete(compositeKey);
    }
    generateCompositeKey(key) {
        return `${this.identifier}:${key}`;
    }
}
exports.LocalMemoryDriver = LocalMemoryDriver;
//# sourceMappingURL=local.driver.js.map