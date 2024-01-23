"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageQueueService = void 0;
const common_1 = require("@nestjs/common");
const message_queue_constants_1 = require("../message-queue.constants");
let MessageQueueService = class MessageQueueService {
    constructor(driver, queueName) {
        this.driver = driver;
        this.queueName = queueName;
        if (typeof this.driver.register === 'function') {
            this.driver.register(queueName);
        }
    }
    async onModuleDestroy() {
        if (typeof this.driver.stop === 'function') {
            await this.driver.stop();
        }
    }
    add(jobName, data, options) {
        return this.driver.add(this.queueName, jobName, data, options);
    }
    addCron(jobName, data, pattern, options) {
        return this.driver.addCron(this.queueName, jobName, data, pattern, options);
    }
    removeCron(jobName, pattern) {
        return this.driver.removeCron(this.queueName, jobName, pattern);
    }
    work(handler) {
        return this.driver.work(this.queueName, handler);
    }
};
exports.MessageQueueService = MessageQueueService;
exports.MessageQueueService = MessageQueueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(message_queue_constants_1.QUEUE_DRIVER)),
    __metadata("design:paramtypes", [Object, String])
], MessageQueueService);
//# sourceMappingURL=message-queue.service.js.map