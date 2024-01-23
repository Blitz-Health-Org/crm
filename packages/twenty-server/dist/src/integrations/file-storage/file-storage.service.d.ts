/// <reference types="node" />
/// <reference types="node" />
import { Readable } from 'stream';
import { StorageDriver } from './drivers/interfaces/storage-driver.interface';
export declare class FileStorageService implements StorageDriver {
    private driver;
    constructor(driver: StorageDriver);
    write(params: {
        file: string | Buffer | Uint8Array;
        name: string;
        folder: string;
        mimeType: string | undefined;
    }): Promise<void>;
    read(params: {
        folderPath: string;
        filename: string;
    }): Promise<Readable>;
}
