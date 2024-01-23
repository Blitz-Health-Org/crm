import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { DataSourceEntity } from 'src/metadata/data-source/data-source.entity';
export declare class TypeORMService implements OnModuleInit, OnModuleDestroy {
    private readonly environmentService;
    private mainDataSource;
    private dataSources;
    private isDatasourceInitializing;
    constructor(environmentService: EnvironmentService);
    getMainDataSource(): DataSource;
    connectToDataSource(dataSource: DataSourceEntity): Promise<DataSource | undefined>;
    private createAndInitializeDataSource;
    disconnectFromDataSource(dataSourceId: string): Promise<void>;
    createSchema(schemaName: string): Promise<string>;
    deleteSchema(schemaName: string): Promise<void>;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
