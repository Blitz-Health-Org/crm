import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { ObjectMetadataService } from 'src/metadata/object-metadata/object-metadata.service';
import { FieldMetadataService } from 'src/metadata/field-metadata/field-metadata.service';
import { CreateRelationInput } from 'src/metadata/relation-metadata/dtos/create-relation.input';
import { WorkspaceMigrationRunnerService } from 'src/workspace/workspace-migration-runner/workspace-migration-runner.service';
import { WorkspaceMigrationService } from 'src/metadata/workspace-migration/workspace-migration.service';
import { RelationMetadataEntity } from './relation-metadata.entity';
export declare class RelationMetadataService extends TypeOrmQueryService<RelationMetadataEntity> {
    private readonly relationMetadataRepository;
    private readonly objectMetadataService;
    private readonly fieldMetadataService;
    private readonly workspaceMigrationService;
    private readonly workspaceMigrationRunnerService;
    constructor(relationMetadataRepository: Repository<RelationMetadataEntity>, objectMetadataService: ObjectMetadataService, fieldMetadataService: FieldMetadataService, workspaceMigrationService: WorkspaceMigrationService, workspaceMigrationRunnerService: WorkspaceMigrationRunnerService);
    createOne(relationMetadataInput: CreateRelationInput): Promise<RelationMetadataEntity>;
    private validateCreateRelationMetadataInput;
    private checkIfFieldMetadataRelationNameExists;
    private createWorkspaceCustomMigration;
    private createFieldMetadataForRelationMetadata;
    private createForeignKeyFieldMetadata;
    private getObjectMetadataMap;
    findOneWithinWorkspace(workspaceId: string, options: FindOneOptions<RelationMetadataEntity>): Promise<RelationMetadataEntity | null>;
    deleteOne(id: string): Promise<RelationMetadataEntity>;
}
