import { HttpService } from '@nestjs/axios';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { User } from 'src/core/user/user.entity';
import { Workspace } from 'src/core/workspace/workspace.entity';
import { CreateAnalyticsInput } from './dto/create-analytics.input';
export declare class AnalyticsService {
    private readonly environmentService;
    private readonly httpService;
    constructor(environmentService: EnvironmentService, httpService: HttpService);
    create(createEventInput: CreateAnalyticsInput, user: User | undefined, workspace: Workspace | undefined): Promise<{
        success: boolean;
    }>;
}
