"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BullMQDriver = void 0;
const bullmq_1 = require("bullmq");
class BullMQDriver {
    constructor(options) {
        this.options = options;
        this.queueMap = {};
        this.workerMap = {};
    }
    register(queueName) {
        this.queueMap[queueName] = new bullmq_1.Queue(queueName, this.options);
    }
    async stop() {
        const workers = Object.values(this.workerMap);
        const queues = Object.values(this.queueMap);
        await Promise.all([
            ...queues.map((q) => q.close()),
            ...workers.map((w) => w.close()),
        ]);
    }
    async work(queueName, handler) {
        const worker = new bullmq_1.Worker(queueName, async (job) => {
            await handler(job);
        }, this.options);
        this.workerMap[queueName] = worker;
    }
    async addCron(queueName, jobName, data, pattern, options) {
        if (!this.queueMap[queueName]) {
            throw new Error(`Queue ${queueName} is not registered, make sure you have added it as a queue provider`);
        }
        const queueOptions = {
            jobId: options === null || options === void 0 ? void 0 : options.id,
            priority: options === null || options === void 0 ? void 0 : options.priority,
            repeat: {
                pattern,
            },
        };
        await this.queueMap[queueName].add(jobName, data, queueOptions);
    }
    async removeCron(queueName, jobName, pattern) {
        await this.queueMap[queueName].removeRepeatable(jobName, {
            pattern,
        });
    }
    async add(queueName, jobName, data, options) {
        if (!this.queueMap[queueName]) {
            throw new Error(`Queue ${queueName} is not registered, make sure you have added it as a queue provider`);
        }
        const queueOptions = { jobId: options === null || options === void 0 ? void 0 : options.id, priority: options === null || options === void 0 ? void 0 : options.priority };
        await this.queueMap[queueName].add(jobName, data, queueOptions);
    }
}
exports.BullMQDriver = BullMQDriver;
//# sourceMappingURL=bullmq.driver.js.map