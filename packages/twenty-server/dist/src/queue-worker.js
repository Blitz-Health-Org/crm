"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const jobs_module_1 = require("./integrations/message-queue/jobs.module");
const message_queue_constants_1 = require("./integrations/message-queue/message-queue.constants");
const get_job_class_name_util_1 = require("./integrations/message-queue/utils/get-job-class-name.util");
const queue_worker_module_1 = require("./queue-worker.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(queue_worker_module_1.QueueWorkerModule);
    for (const queueName of Object.values(message_queue_constants_1.MessageQueue)) {
        const messageQueueService = app.get(queueName);
        await messageQueueService.work(async (jobData) => {
            const jobClassName = (0, get_job_class_name_util_1.getJobClassName)(jobData.name);
            const job = app
                .select(jobs_module_1.JobsModule)
                .get(jobClassName, { strict: true });
            await job.handle(jobData.data);
        });
    }
}
bootstrap();
//# sourceMappingURL=queue-worker.js.map