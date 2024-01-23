import { EntityManager, DataSource } from 'typeorm';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
import { DataSourceEntity } from 'src/metadata/data-source/data-source.entity';
import { GmailMessage, Participant } from 'src/workspace/messaging/types/gmailMessage';
import { GmailThread } from 'src/workspace/messaging/types/gmailThread';
import { MessageQuery } from 'src/workspace/messaging/types/messageOrThreadQuery';
export declare class MessagingUtilsService {
    private readonly dataSourceService;
    private readonly typeORMService;
    constructor(dataSourceService: DataSourceService, typeORMService: TypeORMService);
    createQueriesFromMessageIds(messageExternalIds: string[]): MessageQuery[];
    getThreadsFromMessages(messages: GmailMessage[]): GmailThread[];
    saveMessageThreads(threads: GmailThread[], dataSourceMetadata: DataSourceEntity, workspaceDataSource: DataSource, connectedAccountId: string): Promise<void>;
    saveMessages(messages: GmailMessage[], dataSourceMetadata: DataSourceEntity, workspaceDataSource: DataSource, connectedAccount: any): Promise<void>;
    saveMessageParticipants(participants: Participant[], dataSourceMetadata: DataSourceEntity, messageId: string, manager: EntityManager): Promise<void>;
    getSavedMessageIdsAndThreadIds(messageEternalIds: string[], connectedAccountId: string, dataSourceMetadata: DataSourceEntity, workspaceDataSource: DataSource): Promise<{
        savedMessageIds: string[];
        savedThreadIds: string[];
    }>;
    getConnectedAccountsFromWorkspaceId(workspaceId: string): Promise<any[]>;
    getDataSourceMetadataWorkspaceMetadataAndConnectedAccount(workspaceId: string, connectedAccountId: string): Promise<{
        dataSourceMetadata: DataSourceEntity;
        workspaceDataSource: DataSource;
        connectedAccount: any;
    }>;
    saveLastSyncHistoryId(historyId: string, connectedAccountId: string, dataSourceMetadata: DataSourceEntity, workspaceDataSource: DataSource): Promise<void>;
    deleteMessages(messageIds: string[], dataSourceMetadata: DataSourceEntity, workspaceDataSource: DataSource): Promise<void>;
    deleteEmptyThreads(messageIds: string[], connectedAccountId: string, dataSourceMetadata: DataSourceEntity, workspaceDataSource: DataSource): Promise<void>;
}
