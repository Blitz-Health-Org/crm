import { MemoryStorageDriver } from 'src/integrations/memory-storage/drivers/interfaces/memory-storage-driver.interface';
export declare class MemoryStorageService<T> implements MemoryStorageDriver<T> {
    private driver;
    constructor(driver: MemoryStorageDriver<T>);
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
}
