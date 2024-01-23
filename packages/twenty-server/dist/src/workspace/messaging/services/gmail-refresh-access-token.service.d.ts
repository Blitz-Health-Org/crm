import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
export declare class GmailRefreshAccessTokenService {
    private readonly environmentService;
    private readonly dataSourceService;
    private readonly typeORMService;
    constructor(environmentService: EnvironmentService, dataSourceService: DataSourceService, typeORMService: TypeORMService);
    refreshAndSaveAccessToken(workspaceId: string, connectedAccountId: string): Promise<void>;
    refreshAccessToken(refreshToken: string): Promise<string>;
}
