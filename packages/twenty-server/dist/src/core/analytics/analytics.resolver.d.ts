import { Workspace } from 'src/core/workspace/workspace.entity';
import { User } from 'src/core/user/user.entity';
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsInput } from './dto/create-analytics.input';
export declare class AnalyticsResolver {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    createEvent(createEventInput: CreateAnalyticsInput, workspace: Workspace | undefined, user: User | undefined): Promise<{
        success: boolean;
    }>;
}
