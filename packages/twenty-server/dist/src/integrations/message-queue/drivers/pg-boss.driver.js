"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgBossDriver = void 0;
const pg_boss_1 = __importDefault(require("pg-boss"));
class PgBossDriver {
    constructor(options) {
        this.pgBoss = new pg_boss_1.default(options);
    }
    async stop() {
        await this.pgBoss.stop();
    }
    async init() {
        await this.pgBoss.start();
    }
    async work(queueName, handler) {
        return this.pgBoss.work(`${queueName}.*`, handler);
    }
    async addCron(queueName, jobName, data, pattern, options) {
        await this.pgBoss.schedule(`${queueName}.${jobName}`, pattern, data, options
            ? Object.assign(Object.assign({}, options), { singletonKey: options === null || options === void 0 ? void 0 : options.id }) : {});
    }
    async removeCron(queueName, jobName) {
        await this.pgBoss.unschedule(`${queueName}.${jobName}`);
    }
    async add(queueName, jobName, data, options) {
        await this.pgBoss.send(`${queueName}.${jobName}`, data, options
            ? Object.assign(Object.assign({}, options), { singletonKey: options === null || options === void 0 ? void 0 : options.id }) : {});
    }
}
exports.PgBossDriver = PgBossDriver;
//# sourceMappingURL=pg-boss.driver.js.map