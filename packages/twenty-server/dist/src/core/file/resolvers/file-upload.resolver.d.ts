import { FileUpload } from 'graphql-upload';
import { FileFolder } from 'src/core/file/interfaces/file-folder.interface';
import { FileUploadService } from 'src/core/file/services/file-upload.service';
export declare class FileUploadResolver {
    private readonly fileUploadService;
    constructor(fileUploadService: FileUploadService);
    uploadFile({ createReadStream, filename, mimetype }: FileUpload, fileFolder: FileFolder): Promise<string>;
    uploadImage({ createReadStream, filename, mimetype }: FileUpload, fileFolder: FileFolder): Promise<string>;
}
