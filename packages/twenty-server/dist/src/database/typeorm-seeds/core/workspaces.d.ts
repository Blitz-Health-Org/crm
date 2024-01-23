import { DataSource } from 'typeorm';
export declare const SeedWorkspaceId = "20202020-1c25-4d02-bf25-6aeccf7ea419";
export declare const seedWorkspaces: (workspaceDataSource: DataSource, schemaName: string, workspaceId: string) => Promise<void>;
export declare const deleteWorkspaces: (workspaceDataSource: DataSource, schemaName: string, workspaceId: string) => Promise<void>;
