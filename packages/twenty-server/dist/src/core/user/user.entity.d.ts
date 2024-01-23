import { RefreshToken } from 'src/core/refresh-token/refresh-token.entity';
import { Workspace } from 'src/core/workspace/workspace.entity';
import { WorkspaceMember } from 'src/core/user/dtos/workspace-member.dto';
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    emailVerified: boolean;
    disabled: boolean;
    passwordHash: string;
    canImpersonate: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    defaultWorkspace: Workspace;
    refreshTokens: RefreshToken[];
    workspaceMember: WorkspaceMember;
}
