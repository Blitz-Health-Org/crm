"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncDriver = void 0;
const common_1 = require("@nestjs/common");
const get_job_class_name_util_1 = require("../utils/get-job-class-name.util");
class SyncDriver {
    constructor(jobsModuleRef) {
        this.jobsModuleRef = jobsModuleRef;
        this.logger = new common_1.Logger(SyncDriver.name);
    }
    async add(_queueName, jobName, data) {
        const jobClassName = (0, get_job_class_name_util_1.getJobClassName)(jobName);
        const job = this.jobsModuleRef.get(jobClassName, { strict: true });
        await job.handle(data);
    }
    async addCron(_queueName, jobName, data, pattern) {
        this.logger.log(`Running '${pattern}' cron job with SyncDriver`);
        const jobClassName = (0, get_job_class_name_util_1.getJobClassName)(jobName);
        const job = this.jobsModuleRef.get(jobClassName, {
            strict: true,
        });
        await job.handle(data);
    }
    async removeCron(_queueName, jobName) {
        this.logger.log(`Removing '${jobName}' cron job with SyncDriver`);
        return;
    }
    work() {
        return;
    }
}
exports.SyncDriver = SyncDriver;
//# sourceMappingURL=sync.driver.js.map