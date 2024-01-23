/// <reference types="node" />
import { FileFolder } from 'src/core/file/interfaces/file-folder.interface';
import { FileStorageService } from 'src/integrations/file-storage/file-storage.service';
export declare class FileUploadService {
    private readonly fileStorage;
    constructor(fileStorage: FileStorageService);
    private _uploadFile;
    uploadFile({ file, filename, mimeType, fileFolder, }: {
        file: Buffer | Uint8Array | string;
        filename: string;
        mimeType: string | undefined;
        fileFolder: FileFolder;
    }): Promise<{
        id: string;
        mimeType: string | undefined;
        path: string;
    }>;
    uploadImage({ file, filename, mimeType, fileFolder, }: {
        file: Buffer | Uint8Array | string;
        filename: string;
        mimeType: string | undefined;
        fileFolder: FileFolder;
    }): Promise<{
        id: string;
        mimeType: string | undefined;
        paths: string[];
    }>;
}
