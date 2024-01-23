/// <reference types="node" />
import { FileStorageService } from 'src/integrations/file-storage/file-storage.service';
export declare class FileService {
    private readonly fileStorageService;
    constructor(fileStorageService: FileStorageService);
    getFileStream(folderPath: string, filename: string): Promise<import("stream").Readable>;
}
