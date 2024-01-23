import { CommandRunner } from 'nest-commander';
import { Repository } from 'typeorm';
import { FeatureFlagEntity } from 'src/core/feature-flag/feature-flag.entity';
import { MessagingProducer } from 'src/workspace/messaging/producers/messaging-producer';
import { MessagingUtilsService } from 'src/workspace/messaging/services/messaging-utils.service';
interface GmailPartialSyncOptions {
    workspaceId: string;
}
export declare class GmailPartialSyncCommand extends CommandRunner {
    private readonly messagingProducer;
    private readonly utils;
    private readonly featureFlagRepository;
    constructor(messagingProducer: MessagingProducer, utils: MessagingUtilsService, featureFlagRepository: Repository<FeatureFlagEntity>);
    run(_passedParam: string[], options: GmailPartialSyncOptions): Promise<void>;
    parseWorkspaceId(value: string): string;
    private fetchWorkspaceMessages;
}
export {};
