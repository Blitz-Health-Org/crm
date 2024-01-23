import { FileUpload } from 'graphql-upload';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { FileUploadService } from 'src/core/file/services/file-upload.service';
import { User } from 'src/core/user/user.entity';
import { WorkspaceMember } from 'src/core/user/dtos/workspace-member.dto';
import { UserService } from './services/user.service';
export declare class UserResolver {
    private readonly userService;
    private readonly environmentService;
    private readonly fileUploadService;
    constructor(userService: UserService, environmentService: EnvironmentService, fileUploadService: FileUploadService);
    currentUser({ id }: User): Promise<User>;
    workspaceMember(user: User): Promise<WorkspaceMember>;
    supportUserHash(parent: User): string | null;
    uploadProfilePicture({ id }: User, { createReadStream, filename, mimetype }: FileUpload): Promise<string>;
    deleteUser({ id: userId, defaultWorkspace }: User): Promise<User>;
}
