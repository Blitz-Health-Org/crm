import { FileUpload } from 'graphql-upload';
import { FileUploadService } from 'src/core/file/services/file-upload.service';
import { UpdateWorkspaceInput } from 'src/core/workspace/dtos/update-workspace-input';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { Workspace } from './workspace.entity';
import { WorkspaceService } from './services/workspace.service';
export declare class WorkspaceResolver {
    private readonly workspaceService;
    private readonly fileUploadService;
    private readonly environmentService;
    constructor(workspaceService: WorkspaceService, fileUploadService: FileUploadService, environmentService: EnvironmentService);
    currentWorkspace({ id }: Workspace): Promise<Workspace>;
    updateWorkspace(data: UpdateWorkspaceInput, workspace: Workspace): Promise<Workspace>;
    uploadWorkspaceLogo({ id }: Workspace, { createReadStream, filename, mimetype }: FileUpload): Promise<string>;
    deleteCurrentWorkspace({ id }: Workspace): Promise<Workspace>;
}
