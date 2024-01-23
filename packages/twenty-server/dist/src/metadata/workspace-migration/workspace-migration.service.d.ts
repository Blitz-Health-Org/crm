import { Repository } from 'typeorm';
import { WorkspaceMigrationEntity, WorkspaceMigrationTableAction } from './workspace-migration.entity';
export declare class WorkspaceMigrationService {
    private readonly workspaceMigrationRepository;
    constructor(workspaceMigrationRepository: Repository<WorkspaceMigrationEntity>);
    getPendingMigrations(workspaceId: string): Promise<WorkspaceMigrationEntity[]>;
    setAppliedAtForMigration(workspaceId: string, migration: WorkspaceMigrationEntity): Promise<void>;
    createCustomMigration(workspaceId: string, migrations: WorkspaceMigrationTableAction[]): Promise<void>;
    delete(workspaceId: string): Promise<void>;
}
