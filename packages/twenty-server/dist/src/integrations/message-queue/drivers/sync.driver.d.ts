import { ModuleRef } from '@nestjs/core';
import { MessageQueueDriver } from 'src/integrations/message-queue/drivers/interfaces/message-queue-driver.interface';
import { MessageQueueJobData } from 'src/integrations/message-queue/interfaces/message-queue-job.interface';
import { MessageQueue } from 'src/integrations/message-queue/message-queue.constants';
export declare class SyncDriver implements MessageQueueDriver {
    private readonly jobsModuleRef;
    private readonly logger;
    constructor(jobsModuleRef: ModuleRef);
    add<T extends MessageQueueJobData>(_queueName: MessageQueue, jobName: string, data: T): Promise<void>;
    addCron<T extends MessageQueueJobData | undefined>(_queueName: MessageQueue, jobName: string, data: T, pattern: string): Promise<void>;
    removeCron(_queueName: MessageQueue, jobName: string): Promise<void>;
    work(): void;
}
