"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MemoryStorageModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryStorageModule = void 0;
const common_1 = require("@nestjs/common");
const default_serializer_1 = require("./serializers/default.serializer");
const memory_storage_util_1 = require("./memory-storage.util");
const interfaces_1 = require("./interfaces");
const local_driver_1 = require("./drivers/local.driver");
let MemoryStorageModule = MemoryStorageModule_1 = class MemoryStorageModule {
    static forRoot(options) {
        const injectionToken = (0, memory_storage_util_1.createMemoryStorageInjectionToken)(options.identifier);
        const provider = {
            provide: injectionToken,
            useValue: this.createStorageDriver(options),
        };
        return {
            module: MemoryStorageModule_1,
            providers: [provider],
            exports: [provider],
        };
    }
    static forRootAsync(options) {
        const injectionToken = (0, memory_storage_util_1.createMemoryStorageInjectionToken)(options.identifier);
        const provider = {
            provide: injectionToken,
            useFactory: async (...args) => {
                const config = await options.useFactory(...args);
                return this.createStorageDriver(Object.assign({ identifier: options.identifier }, config));
            },
            inject: options.inject || [],
        };
        return {
            module: MemoryStorageModule_1,
            imports: options.imports || [],
            providers: [provider],
            exports: [provider],
        };
    }
    static createStorageDriver(options) {
        var _a;
        switch (options.type) {
            case interfaces_1.MemoryStorageDriverType.Local:
                return new local_driver_1.LocalMemoryDriver(options.identifier, options.options, (_a = options.serializer) !== null && _a !== void 0 ? _a : new default_serializer_1.MemoryStorageDefaultSerializer());
            default:
                throw new Error(`Unsupported storage type: ${options.type}`);
        }
    }
};
exports.MemoryStorageModule = MemoryStorageModule;
exports.MemoryStorageModule = MemoryStorageModule = MemoryStorageModule_1 = __decorate([
    (0, common_1.Global)()
], MemoryStorageModule);
//# sourceMappingURL=memory-storage.module.js.map