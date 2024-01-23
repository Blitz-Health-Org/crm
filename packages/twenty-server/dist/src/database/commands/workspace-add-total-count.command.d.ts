import { CommandRunner } from 'nest-commander';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
export declare class WorkspaceAddTotalCountCommand extends CommandRunner {
    private readonly typeORMService;
    constructor(typeORMService: TypeORMService);
    run(): Promise<void>;
}
