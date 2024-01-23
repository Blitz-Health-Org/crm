import { Repository } from 'typeorm';
import { FieldMetadataEntity } from 'src/metadata/field-metadata/field-metadata.entity';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
import { RelationMetadataEntity } from 'src/metadata/relation-metadata/relation-metadata.entity';
import { WorkspaceMigrationEntity } from 'src/metadata/workspace-migration/workspace-migration.entity';
import { WorkspaceMigrationFactory } from 'src/metadata/workspace-migration/workspace-migration.factory';
import { WorkspaceMigrationRunnerService } from 'src/workspace/workspace-migration-runner/workspace-migration-runner.service';
import { ReflectiveMetadataFactory } from 'src/workspace/workspace-sync-metadata/reflective-metadata.factory';
import { FeatureFlagEntity } from 'src/core/feature-flag/feature-flag.entity';
export declare class WorkspaceSyncMetadataService {
    private readonly workspaceMigrationFactory;
    private readonly workspaceMigrationRunnerService;
    private readonly reflectiveMetadataFactory;
    private readonly objectMetadataRepository;
    private readonly fieldMetadataRepository;
    private readonly relationMetadataRepository;
    private readonly workspaceMigrationRepository;
    private readonly featureFlagRepository;
    constructor(workspaceMigrationFactory: WorkspaceMigrationFactory, workspaceMigrationRunnerService: WorkspaceMigrationRunnerService, reflectiveMetadataFactory: ReflectiveMetadataFactory, objectMetadataRepository: Repository<ObjectMetadataEntity>, fieldMetadataRepository: Repository<FieldMetadataEntity>, relationMetadataRepository: Repository<RelationMetadataEntity>, workspaceMigrationRepository: Repository<WorkspaceMigrationEntity>, featureFlagRepository: Repository<FeatureFlagEntity>);
    syncStandardObjectsAndFieldsMetadata(dataSourceId: string, workspaceId: string): Promise<void>;
    private prepareFieldMetadataForCreation;
    private generateUUIDForNewSelectFieldOptions;
    private syncRelationMetadata;
    private generateMigrationsFromSync;
    private generateRelationMigrationsFromSync;
}
