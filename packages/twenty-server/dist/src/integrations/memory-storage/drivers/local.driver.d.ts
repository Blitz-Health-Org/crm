import { MemoryStorageSerializer } from 'src/integrations/memory-storage/serializers/interfaces/memory-storage-serializer.interface';
import { MemoryStorageDriver } from './interfaces/memory-storage-driver.interface';
export interface LocalMemoryDriverOptions {
}
export declare class LocalMemoryDriver<T> implements MemoryStorageDriver<T> {
    private identifier;
    private options;
    private serializer;
    private storage;
    constructor(identifier: string, options: LocalMemoryDriverOptions, serializer: MemoryStorageSerializer<T>);
    write(params: {
        key: string;
        data: T;
    }): Promise<void>;
    read(params: {
        key: string;
    }): Promise<T | null>;
    delete(params: {
        key: string;
    }): Promise<void>;
    private generateCompositeKey;
}
