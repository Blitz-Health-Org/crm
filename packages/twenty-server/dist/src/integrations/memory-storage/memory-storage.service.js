"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryStorageService = void 0;
class MemoryStorageService {
    constructor(driver) {
        this.driver = driver;
    }
    write(params) {
        return this.driver.write(params);
    }
    read(params) {
        return this.driver.read(params);
    }
    delete(params) {
        return this.driver.delete(params);
    }
}
exports.MemoryStorageService = MemoryStorageService;
//# sourceMappingURL=memory-storage.service.js.map