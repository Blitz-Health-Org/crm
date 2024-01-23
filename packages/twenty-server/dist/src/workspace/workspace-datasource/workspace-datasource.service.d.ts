import { DataSource } from 'typeorm';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
export declare class WorkspaceDataSourceService {
    private readonly dataSourceService;
    private readonly typeormService;
    constructor(dataSourceService: DataSourceService, typeormService: TypeORMService);
    connectToWorkspaceDataSource(workspaceId: string): Promise<DataSource>;
    createWorkspaceDBSchema(workspaceId: string): Promise<string>;
    deleteWorkspaceDBSchema(workspaceId: string): Promise<void>;
    getSchemaName(workspaceId: string): string;
    private uuidToBase36;
}
