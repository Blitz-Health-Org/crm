import { CommandRunner } from 'nest-commander';
import { MessageQueueService } from 'src/integrations/message-queue/services/message-queue.service';
export declare class CleanInactiveWorkspacesCommand extends CommandRunner {
    private readonly messageQueueService;
    constructor(messageQueueService: MessageQueueService);
    run(): Promise<void>;
}
