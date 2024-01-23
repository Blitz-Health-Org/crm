import { FindManyOptions, Repository } from 'typeorm';
import { DataSourceEntity } from './data-source.entity';
export declare class DataSourceService {
    private readonly dataSourceMetadataRepository;
    constructor(dataSourceMetadataRepository: Repository<DataSourceEntity>);
    createDataSourceMetadata(workspaceId: string, workspaceSchema: string): Promise<DataSourceEntity>;
    getManyDataSourceMetadata(options?: FindManyOptions<DataSourceEntity>): Promise<DataSourceEntity[]>;
    getDataSourcesMetadataFromWorkspaceId(workspaceId: string): Promise<DataSourceEntity[]>;
    getLastDataSourceMetadataFromWorkspaceIdOrFail(workspaceId: string): Promise<DataSourceEntity>;
    delete(workspaceId: string): Promise<void>;
}
