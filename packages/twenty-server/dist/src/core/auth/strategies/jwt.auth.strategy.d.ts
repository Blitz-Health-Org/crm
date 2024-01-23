import { Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { Workspace } from 'src/core/workspace/workspace.entity';
import { User } from 'src/core/user/user.entity';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
export type JwtPayload = {
    sub: string;
    workspaceId: string;
    jti?: string;
};
export type PassportUser = {
    user?: User;
    workspace: Workspace;
};
declare const JwtAuthStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAuthStrategy extends JwtAuthStrategy_base {
    private readonly environmentService;
    private readonly typeORMService;
    private readonly dataSourceService;
    private readonly workspaceRepository;
    private readonly userRepository;
    constructor(environmentService: EnvironmentService, typeORMService: TypeORMService, dataSourceService: DataSourceService, workspaceRepository: Repository<Workspace>, userRepository: Repository<User>);
    validate(payload: JwtPayload): Promise<PassportUser>;
}
export {};
