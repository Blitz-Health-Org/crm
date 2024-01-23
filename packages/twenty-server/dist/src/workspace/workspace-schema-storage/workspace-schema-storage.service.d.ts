import { MemoryStorageService } from 'src/integrations/memory-storage/memory-storage.service';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
import { WorkspaceCacheVersionService } from 'src/metadata/workspace-cache-version/workspace-cache-version.service';
export declare class WorkspaceSchemaStorageService {
    private readonly objectMetadataMemoryStorageService;
    private readonly typeDefsMemoryStorageService;
    private readonly usedScalarNamesMemoryStorageService;
    private readonly cacheVersionMemoryStorageService;
    private readonly workspaceCacheVersionService;
    constructor(objectMetadataMemoryStorageService: MemoryStorageService<ObjectMetadataEntity[]>, typeDefsMemoryStorageService: MemoryStorageService<string>, usedScalarNamesMemoryStorageService: MemoryStorageService<string[]>, cacheVersionMemoryStorageService: MemoryStorageService<string>, workspaceCacheVersionService: WorkspaceCacheVersionService);
    validateCacheVersion(workspaceId: string): Promise<void>;
    setObjectMetadata(workspaceId: string, objectMetadata: ObjectMetadataEntity[]): Promise<void>;
    getObjectMetadata(workspaceId: string): Promise<ObjectMetadataEntity[] | null>;
    setTypeDefs(workspaceId: string, typeDefs: string): Promise<void>;
    getTypeDefs(workspaceId: string): Promise<string | null>;
    setUsedScalarNames(workspaceId: string, scalarsUsed: string[]): Promise<void>;
    getUsedScalarNames(workspaceId: string): Promise<string[] | null>;
    invalidateCache(workspaceId: string): Promise<void>;
}
