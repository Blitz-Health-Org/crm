import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/core/user/user.entity';
import { WorkspaceMember } from 'src/core/user/dtos/workspace-member.dto';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { DataSourceEntity } from 'src/metadata/data-source/data-source.entity';
export declare class UserService extends TypeOrmQueryService<User> {
    private readonly userRepository;
    private readonly dataSourceService;
    private readonly typeORMService;
    constructor(userRepository: Repository<User>, dataSourceService: DataSourceService, typeORMService: TypeORMService);
    loadWorkspaceMember(user: User): Promise<WorkspaceMember>;
    loadWorkspaceMembers(dataSource: DataSourceEntity): Promise<any>;
    createWorkspaceMember(user: User, avatarUrl?: string): Promise<void>;
    deleteUser(userId: string): Promise<User>;
}
