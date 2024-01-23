import { DataSourceService } from 'src/metadata/data-source/data-source.service';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { SaveConnectedAccountInput } from 'src/core/auth/dto/save-connected-account';
import { MessageQueueService } from 'src/integrations/message-queue/services/message-queue.service';
export declare class GoogleGmailService {
    private readonly dataSourceService;
    private readonly typeORMService;
    private readonly messageQueueService;
    constructor(dataSourceService: DataSourceService, typeORMService: TypeORMService, messageQueueService: MessageQueueService);
    saveConnectedAccount(saveConnectedAccountInput: SaveConnectedAccountInput): Promise<void>;
}
