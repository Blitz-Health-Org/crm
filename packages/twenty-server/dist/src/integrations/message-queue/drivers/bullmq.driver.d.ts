import { QueueOptions } from 'bullmq';
import { QueueJobOptions } from 'src/integrations/message-queue/drivers/interfaces/job-options.interface';
import { MessageQueue } from 'src/integrations/message-queue/message-queue.constants';
import { MessageQueueDriver } from './interfaces/message-queue-driver.interface';
export type BullMQDriverOptions = QueueOptions;
export declare class BullMQDriver implements MessageQueueDriver {
    private options;
    private queueMap;
    private workerMap;
    constructor(options: BullMQDriverOptions);
    register(queueName: MessageQueue): void;
    stop(): Promise<void>;
    work<T>(queueName: MessageQueue, handler: ({ data, id }: {
        data: T;
        id: string;
    }) => Promise<void>): Promise<void>;
    addCron<T>(queueName: MessageQueue, jobName: string, data: T, pattern: string, options?: QueueJobOptions): Promise<void>;
    removeCron(queueName: MessageQueue, jobName: string, pattern: string): Promise<void>;
    add<T>(queueName: MessageQueue, jobName: string, data: T, options?: QueueJobOptions): Promise<void>;
}
