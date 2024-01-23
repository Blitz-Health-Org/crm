import { OnModuleDestroy } from '@nestjs/common';
import { QueueJobOptions } from 'src/integrations/message-queue/drivers/interfaces/job-options.interface';
import { MessageQueueDriver } from 'src/integrations/message-queue/drivers/interfaces/message-queue-driver.interface';
import { MessageQueueJobData } from 'src/integrations/message-queue/interfaces/message-queue-job.interface';
import { MessageQueue } from 'src/integrations/message-queue/message-queue.constants';
export declare class MessageQueueService implements OnModuleDestroy {
    protected driver: MessageQueueDriver;
    protected queueName: MessageQueue;
    constructor(driver: MessageQueueDriver, queueName: MessageQueue);
    onModuleDestroy(): Promise<void>;
    add<T extends MessageQueueJobData>(jobName: string, data: T, options?: QueueJobOptions): Promise<void>;
    addCron<T extends MessageQueueJobData | undefined>(jobName: string, data: T, pattern: string, options?: QueueJobOptions): Promise<void>;
    removeCron(jobName: string, pattern: string): Promise<void>;
    work<T extends MessageQueueJobData>(handler: ({ data, id }: {
        data: T;
        id: string;
    }) => Promise<void> | void): any;
}
