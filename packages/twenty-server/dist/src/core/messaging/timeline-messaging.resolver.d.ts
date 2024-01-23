import { Workspace } from 'src/core/workspace/workspace.entity';
import { TimelineMessagingService } from 'src/core/messaging/timeline-messaging.service';
export declare class TimelineMessagingResolver {
    private readonly timelineMessagingService;
    constructor(timelineMessagingService: TimelineMessagingService);
    getTimelineThreadsFromPersonId({ id: workspaceId }: Workspace, personId: string): Promise<any>;
    getTimelineThreadsFromCompanyId({ id: workspaceId }: Workspace, companyId: string): Promise<any>;
}
