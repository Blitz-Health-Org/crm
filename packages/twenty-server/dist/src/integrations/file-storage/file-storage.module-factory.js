"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileStorageModuleFactory = void 0;
const credential_providers_1 = require("@aws-sdk/credential-providers");
const interfaces_1 = require("./interfaces");
const fileStorageModuleFactory = async (environmentService) => {
    const driverType = environmentService.getStorageDriverType();
    switch (driverType) {
        case interfaces_1.StorageDriverType.Local: {
            const storagePath = environmentService.getStorageLocalPath();
            return {
                type: interfaces_1.StorageDriverType.Local,
                options: {
                    storagePath: process.cwd() + '/' + storagePath,
                },
            };
        }
        case interfaces_1.StorageDriverType.S3: {
            const bucketName = environmentService.getStorageS3Name();
            const endpoint = environmentService.getStorageS3Endpoint();
            const region = environmentService.getStorageS3Region();
            return {
                type: interfaces_1.StorageDriverType.S3,
                options: {
                    bucketName: bucketName !== null && bucketName !== void 0 ? bucketName : '',
                    endpoint: endpoint,
                    credentials: (0, credential_providers_1.fromNodeProviderChain)({
                        clientConfig: { region },
                    }),
                    forcePathStyle: true,
                    region: region !== null && region !== void 0 ? region : '',
                },
            };
        }
        default:
            throw new Error(`Invalid storage driver type (${driverType}), check your .env file`);
    }
};
exports.fileStorageModuleFactory = fileStorageModuleFactory;
//# sourceMappingURL=file-storage.module-factory.js.map