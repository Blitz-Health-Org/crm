"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MessageQueueModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageQueueModule = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("./interfaces");
const message_queue_constants_1 = require("./message-queue.constants");
const pg_boss_driver_1 = require("./drivers/pg-boss.driver");
const message_queue_service_1 = require("./services/message-queue.service");
const bullmq_driver_1 = require("./drivers/bullmq.driver");
const sync_driver_1 = require("./drivers/sync.driver");
const jobs_module_1 = require("./jobs.module");
let MessageQueueModule = MessageQueueModule_1 = class MessageQueueModule {
    static forRoot(options) {
        const providers = [
            ...Object.values(message_queue_constants_1.MessageQueue).map((queue) => ({
                provide: queue,
                useFactory: (driver) => {
                    return new message_queue_service_1.MessageQueueService(driver, queue);
                },
                inject: [message_queue_constants_1.QUEUE_DRIVER],
            })),
            {
                provide: message_queue_constants_1.QUEUE_DRIVER,
                useFactory: async (...args) => {
                    const config = await options.useFactory(...args);
                    switch (config.type) {
                        case interfaces_1.MessageQueueDriverType.PgBoss:
                            const boss = new pg_boss_driver_1.PgBossDriver(config.options);
                            await boss.init();
                            return boss;
                        case interfaces_1.MessageQueueDriverType.BullMQ:
                            return new bullmq_driver_1.BullMQDriver(config.options);
                        default:
                            return new sync_driver_1.SyncDriver(jobs_module_1.JobsModule.moduleRef);
                    }
                },
                inject: options.inject || [],
            },
        ];
        return {
            module: MessageQueueModule_1,
            imports: [jobs_module_1.JobsModule, ...(options.imports || [])],
            providers,
            exports: Object.values(message_queue_constants_1.MessageQueue),
        };
    }
};
exports.MessageQueueModule = MessageQueueModule;
exports.MessageQueueModule = MessageQueueModule = MessageQueueModule_1 = __decorate([
    (0, common_1.Global)()
], MessageQueueModule);
//# sourceMappingURL=message-queue.module.js.map