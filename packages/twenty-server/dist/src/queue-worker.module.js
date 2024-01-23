"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueWorkerModule = void 0;
const common_1 = require("@nestjs/common");
const environment_module_1 = require("./integrations/environment/environment.module");
const environment_service_1 = require("./integrations/environment/environment.service");
const logger_module_1 = require("./integrations/logger/logger.module");
const logger_module_factory_1 = require("./integrations/logger/logger.module-factory");
const jobs_module_1 = require("./integrations/message-queue/jobs.module");
const message_queue_module_1 = require("./integrations/message-queue/message-queue.module");
const message_queue_module_factory_1 = require("./integrations/message-queue/message-queue.module-factory");
const integrations_module_1 = require("./integrations/integrations.module");
let QueueWorkerModule = class QueueWorkerModule {
};
exports.QueueWorkerModule = QueueWorkerModule;
exports.QueueWorkerModule = QueueWorkerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            environment_module_1.EnvironmentModule.forRoot({}),
            logger_module_1.LoggerModule.forRootAsync({
                useFactory: logger_module_factory_1.loggerModuleFactory,
                inject: [environment_service_1.EnvironmentService],
            }),
            message_queue_module_1.MessageQueueModule.forRoot({
                useFactory: message_queue_module_factory_1.messageQueueModuleFactory,
                inject: [environment_service_1.EnvironmentService],
            }),
            jobs_module_1.JobsModule,
            integrations_module_1.IntegrationsModule,
        ],
    })
], QueueWorkerModule);
//# sourceMappingURL=queue-worker.module.js.map