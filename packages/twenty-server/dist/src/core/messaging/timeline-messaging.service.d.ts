import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
export declare class TimelineMessagingService {
    private readonly dataSourceService;
    private readonly typeORMService;
    constructor(dataSourceService: DataSourceService, typeORMService: TypeORMService);
    getMessagesFromPersonIds(workspaceId: string, personIds: string[]): Promise<any>;
    getMessagesFromCompanyId(workspaceId: string, companyId: string): Promise<any>;
}
