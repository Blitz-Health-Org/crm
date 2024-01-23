import { DataSource } from 'typeorm';
export declare const seedCoreSchema: (workspaceDataSource: DataSource, workspaceId: string) => Promise<void>;
export declare const deleteCoreSchema: (workspaceDataSource: DataSource, workspaceId: string) => Promise<void>;
