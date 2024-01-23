/// <reference types="node" />
/// <reference types="node" />
import { Readable } from 'stream';
import { StorageDriver } from './interfaces/storage-driver.interface';
export interface LocalDriverOptions {
    storagePath: string;
}
export declare class LocalDriver implements StorageDriver {
    private options;
    constructor(options: LocalDriverOptions);
    createFolder(path: string): Promise<string | undefined>;
    write(params: {
        file: Buffer | Uint8Array | string;
        name: string;
        folder: string;
        mimeType: string | undefined;
    }): Promise<void>;
    read(params: {
        folderPath: string;
        filename: string;
    }): Promise<Readable>;
}
