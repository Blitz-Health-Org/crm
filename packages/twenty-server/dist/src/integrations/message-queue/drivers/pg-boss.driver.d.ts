import PgBoss from 'pg-boss';
import { QueueJobOptions } from 'src/integrations/message-queue/drivers/interfaces/job-options.interface';
import { MessageQueue } from 'src/integrations/message-queue/message-queue.constants';
import { MessageQueueDriver } from './interfaces/message-queue-driver.interface';
export type PgBossDriverOptions = PgBoss.ConstructorOptions;
export declare class PgBossDriver implements MessageQueueDriver {
    private pgBoss;
    constructor(options: PgBossDriverOptions);
    stop(): Promise<void>;
    init(): Promise<void>;
    work<T>(queueName: string, handler: ({ data, id }: {
        data: T;
        id: string;
    }) => Promise<void>): Promise<string>;
    addCron<T>(queueName: MessageQueue, jobName: string, data: T, pattern: string, options?: QueueJobOptions): Promise<void>;
    removeCron(queueName: MessageQueue, jobName: string): Promise<void>;
    add<T>(queueName: MessageQueue, jobName: string, data: T, options?: QueueJobOptions): Promise<void>;
}
