export declare enum WorkspaceMigrationColumnActionType {
    CREATE = "CREATE",
    ALTER = "ALTER",
    RELATION = "RELATION",
    DROP = "DROP"
}
export type WorkspaceMigrationEnum = string | {
    from: string;
    to: string;
};
export interface WorkspaceMigrationColumnDefinition {
    columnName: string;
    columnType: string;
    enum?: WorkspaceMigrationEnum[];
    isArray?: boolean;
    isNullable?: boolean;
    defaultValue?: any;
}
export interface WorkspaceMigrationColumnCreate extends WorkspaceMigrationColumnDefinition {
    action: WorkspaceMigrationColumnActionType.CREATE;
}
export type WorkspaceMigrationColumnAlter = {
    action: WorkspaceMigrationColumnActionType.ALTER;
    currentColumnDefinition: WorkspaceMigrationColumnDefinition;
    alteredColumnDefinition: WorkspaceMigrationColumnDefinition;
};
export type WorkspaceMigrationColumnRelation = {
    action: WorkspaceMigrationColumnActionType.RELATION;
    columnName: string;
    referencedTableName: string;
    referencedTableColumnName: string;
    isUnique?: boolean;
};
export type WorkspaceMigrationColumnDrop = {
    action: WorkspaceMigrationColumnActionType.DROP;
    columnName: string;
};
export type WorkspaceMigrationColumnAction = {
    action: WorkspaceMigrationColumnActionType;
} & (WorkspaceMigrationColumnCreate | WorkspaceMigrationColumnAlter | WorkspaceMigrationColumnRelation | WorkspaceMigrationColumnDrop);
export type WorkspaceMigrationTableAction = {
    name: string;
    action: 'create' | 'alter';
    columns?: WorkspaceMigrationColumnAction[];
};
export declare class WorkspaceMigrationEntity {
    id: string;
    migrations: WorkspaceMigrationTableAction[];
    name: string;
    isCustom: boolean;
    appliedAt?: Date;
    workspaceId: string;
    createdAt: Date;
}
