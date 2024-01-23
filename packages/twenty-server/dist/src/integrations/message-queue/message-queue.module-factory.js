"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageQueueModuleFactory = void 0;
const interfaces_1 = require("./interfaces");
const messageQueueModuleFactory = async (environmentService) => {
    const driverType = environmentService.getMessageQueueDriverType();
    switch (driverType) {
        case interfaces_1.MessageQueueDriverType.Sync: {
            return {
                type: interfaces_1.MessageQueueDriverType.Sync,
                options: {},
            };
        }
        case interfaces_1.MessageQueueDriverType.PgBoss: {
            const connectionString = environmentService.getPGDatabaseUrl();
            return {
                type: interfaces_1.MessageQueueDriverType.PgBoss,
                options: {
                    connectionString,
                },
            };
        }
        case interfaces_1.MessageQueueDriverType.BullMQ: {
            const host = environmentService.getRedisHost();
            const port = environmentService.getRedisPort();
            return {
                type: interfaces_1.MessageQueueDriverType.BullMQ,
                options: {
                    connection: {
                        host,
                        port,
                    },
                },
            };
        }
        default:
            throw new Error(`Invalid message queue driver type (${driverType}), check your .env file`);
    }
};
exports.messageQueueModuleFactory = messageQueueModuleFactory;
//# sourceMappingURL=message-queue.module-factory.js.map