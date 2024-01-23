import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
export declare class ApiKeyObjectMetadata extends BaseObjectMetadata {
    name: string;
    expiresAt: Date;
    revokedAt?: Date;
}
