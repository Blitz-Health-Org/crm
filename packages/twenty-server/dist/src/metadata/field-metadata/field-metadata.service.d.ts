import { FindOneOptions, Repository } from 'typeorm';
import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';
import { WorkspaceMigrationRunnerService } from 'src/workspace/workspace-migration-runner/workspace-migration-runner.service';
import { WorkspaceMigrationService } from 'src/metadata/workspace-migration/workspace-migration.service';
import { ObjectMetadataService } from 'src/metadata/object-metadata/object-metadata.service';
import { CreateFieldInput } from 'src/metadata/field-metadata/dtos/create-field.input';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
import { UpdateFieldInput } from 'src/metadata/field-metadata/dtos/update-field.input';
import { WorkspaceMigrationFactory } from 'src/metadata/workspace-migration/workspace-migration.factory';
import { FieldMetadataEntity } from './field-metadata.entity';
export declare class FieldMetadataService extends TypeOrmQueryService<FieldMetadataEntity> {
    private readonly fieldMetadataRepository;
    private readonly objectMetadataService;
    private readonly workspaceMigrationFactory;
    private readonly workspaceMigrationService;
    private readonly workspaceMigrationRunnerService;
    private readonly dataSourceService;
    private readonly typeORMService;
    constructor(fieldMetadataRepository: Repository<FieldMetadataEntity>, objectMetadataService: ObjectMetadataService, workspaceMigrationFactory: WorkspaceMigrationFactory, workspaceMigrationService: WorkspaceMigrationService, workspaceMigrationRunnerService: WorkspaceMigrationRunnerService, dataSourceService: DataSourceService, typeORMService: TypeORMService);
    createOne(fieldMetadataInput: CreateFieldInput): Promise<FieldMetadataEntity>;
    updateOne(id: string, fieldMetadataInput: UpdateFieldInput): Promise<FieldMetadataEntity>;
    findOneOrFail(id: string, options?: FindOneOptions<FieldMetadataEntity>): Promise<FieldMetadataEntity<"default">>;
    findOneWithinWorkspace(workspaceId: string, options: FindOneOptions<FieldMetadataEntity>): Promise<FieldMetadataEntity<"default"> | null>;
    deleteFieldsMetadata(workspaceId: string): Promise<void>;
}
