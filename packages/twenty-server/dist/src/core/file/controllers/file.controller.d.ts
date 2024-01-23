import { Response } from 'express';
import { FileService } from 'src/core/file/services/file.service';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    getFile(params: string[], res: Response): Promise<void>;
}
