import { DataSource } from 'typeorm';
export declare const seedFeatureFlags: (workspaceDataSource: DataSource, schemaName: string, workspaceId: string) => Promise<void>;
export declare const deleteFeatureFlags: (workspaceDataSource: DataSource, schemaName: string, workspaceId: string) => Promise<void>;
