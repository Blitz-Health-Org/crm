import { DataSource } from 'typeorm';
export declare const seedWorkspaces: (workspaceDataSource: DataSource, schemaName: string, workspaceId: string) => Promise<void>;
export declare const deleteWorkspaces: (workspaceDataSource: DataSource, schemaName: string, workspaceId: string) => Promise<void>;
