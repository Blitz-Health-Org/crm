import { DataSource } from 'typeorm';
export declare enum SeedUserIds {
    Tim = "20202020-9e3b-46d4-a556-88b9ddc2b034",
    Jony = "20202020-3957-4908-9c36-2929a23f8357",
    Phil = "20202020-7169-42cf-bc47-1cfef15264b8"
}
export declare const seedUsers: (workspaceDataSource: DataSource, schemaName: string, workspaceId: string) => Promise<void>;
export declare const deleteUsersByWorkspace: (workspaceDataSource: DataSource, schemaName: string, workspaceId: string) => Promise<void>;
