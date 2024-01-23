import { MemoryStorageSerializer } from 'src/integrations/memory-storage/serializers/interfaces/memory-storage-serializer.interface';
export declare class MemoryStorageJsonSerializer<T> implements MemoryStorageSerializer<T> {
    serialize(item: T): string;
    deserialize(data: string): T;
}
