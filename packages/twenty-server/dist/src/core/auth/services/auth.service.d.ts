import { HttpService } from '@nestjs/axios';
import { Repository } from 'typeorm';
import { ChallengeInput } from 'src/core/auth/dto/challenge.input';
import { Verify } from 'src/core/auth/dto/verify.entity';
import { UserExists } from 'src/core/auth/dto/user-exists.entity';
import { WorkspaceInviteHashValid } from 'src/core/auth/dto/workspace-invite-hash-valid.entity';
import { User } from 'src/core/user/user.entity';
import { Workspace } from 'src/core/workspace/workspace.entity';
import { UserService } from 'src/core/user/services/user.service';
import { WorkspaceManagerService } from 'src/workspace/workspace-manager/workspace-manager.service';
import { FileUploadService } from 'src/core/file/services/file-upload.service';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { TokenService } from './token.service';
export type UserPayload = {
    firstName: string;
    lastName: string;
    email: string;
};
export declare class AuthService {
    private readonly tokenService;
    private readonly userService;
    private readonly workspaceManagerService;
    private readonly fileUploadService;
    private readonly workspaceRepository;
    private readonly userRepository;
    private readonly httpService;
    private readonly environmentService;
    constructor(tokenService: TokenService, userService: UserService, workspaceManagerService: WorkspaceManagerService, fileUploadService: FileUploadService, workspaceRepository: Repository<Workspace>, userRepository: Repository<User>, httpService: HttpService, environmentService: EnvironmentService);
    challenge(challengeInput: ChallengeInput): Promise<User>;
    signUp({ email, password, workspaceInviteHash, firstName, lastName, picture, }: {
        email: string;
        password?: string;
        firstName?: string | null;
        lastName?: string | null;
        workspaceInviteHash?: string | null;
        picture?: string | null;
    }): Promise<User>;
    verify(email: string): Promise<Verify>;
    checkUserExists(email: string): Promise<UserExists>;
    checkWorkspaceInviteHashIsValid(inviteHash: string): Promise<WorkspaceInviteHashValid>;
    impersonate(userId: string): Promise<{
        user: User;
        tokens: {
            accessToken: import("../dto/token.entity").AuthToken;
            refreshToken: import("../dto/token.entity").AuthToken;
        };
    }>;
}
