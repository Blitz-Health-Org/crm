"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const exception_handler_module_1 = require("./exception-handler/exception-handler.module");
const exception_handler_module_factory_1 = require("./exception-handler/exception-handler.module-factory");
const file_storage_module_factory_1 = require("./file-storage/file-storage.module-factory");
const logger_module_factory_1 = require("./logger/logger.module-factory");
const message_queue_module_factory_1 = require("./message-queue/message-queue.module-factory");
const email_module_1 = require("./email/email.module");
const email_module_factory_1 = require("./email/email.module-factory");
const environment_module_1 = require("./environment/environment.module");
const environment_service_1 = require("./environment/environment.service");
const file_storage_module_1 = require("./file-storage/file-storage.module");
const logger_module_1 = require("./logger/logger.module");
const message_queue_module_1 = require("./message-queue/message-queue.module");
let IntegrationsModule = class IntegrationsModule {
};
exports.IntegrationsModule = IntegrationsModule;
exports.IntegrationsModule = IntegrationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            environment_module_1.EnvironmentModule.forRoot({}),
            file_storage_module_1.FileStorageModule.forRootAsync({
                useFactory: file_storage_module_factory_1.fileStorageModuleFactory,
                inject: [environment_service_1.EnvironmentService],
            }),
            logger_module_1.LoggerModule.forRootAsync({
                useFactory: logger_module_factory_1.loggerModuleFactory,
                inject: [environment_service_1.EnvironmentService],
            }),
            message_queue_module_1.MessageQueueModule.forRoot({
                useFactory: message_queue_module_factory_1.messageQueueModuleFactory,
                inject: [environment_service_1.EnvironmentService],
            }),
            exception_handler_module_1.ExceptionHandlerModule.forRootAsync({
                useFactory: exception_handler_module_factory_1.exceptionHandlerModuleFactory,
                inject: [environment_service_1.EnvironmentService, core_1.HttpAdapterHost],
            }),
            email_module_1.EmailModule.forRoot({
                useFactory: email_module_factory_1.emailModuleFactory,
                inject: [environment_service_1.EnvironmentService],
            }),
        ],
        exports: [],
        providers: [],
    })
], IntegrationsModule);
//# sourceMappingURL=integrations.module.js.map