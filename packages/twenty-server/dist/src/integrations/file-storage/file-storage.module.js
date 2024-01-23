"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FileStorageModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStorageModule = void 0;
const common_1 = require("@nestjs/common");
const file_storage_service_1 = require("./file-storage.service");
const file_storage_constants_1 = require("./file-storage.constants");
const local_driver_1 = require("./drivers/local.driver");
const s3_driver_1 = require("./drivers/s3.driver");
let FileStorageModule = FileStorageModule_1 = class FileStorageModule {
    static forRoot(options) {
        const provider = {
            provide: file_storage_constants_1.STORAGE_DRIVER,
            useValue: options.type === 's3'
                ? new s3_driver_1.S3Driver(options.options)
                : new local_driver_1.LocalDriver(options.options),
        };
        return {
            module: FileStorageModule_1,
            providers: [file_storage_service_1.FileStorageService, provider],
            exports: [file_storage_service_1.FileStorageService],
        };
    }
    static forRootAsync(options) {
        const provider = {
            provide: file_storage_constants_1.STORAGE_DRIVER,
            useFactory: async (...args) => {
                const config = await options.useFactory(...args);
                return (config === null || config === void 0 ? void 0 : config.type) === 's3'
                    ? new s3_driver_1.S3Driver(config.options)
                    : new local_driver_1.LocalDriver(config.options);
            },
            inject: options.inject || [],
        };
        return {
            module: FileStorageModule_1,
            imports: options.imports || [],
            providers: [file_storage_service_1.FileStorageService, provider],
            exports: [file_storage_service_1.FileStorageService],
        };
    }
};
exports.FileStorageModule = FileStorageModule;
exports.FileStorageModule = FileStorageModule = FileStorageModule_1 = __decorate([
    (0, common_1.Global)()
], FileStorageModule);
//# sourceMappingURL=file-storage.module.js.map