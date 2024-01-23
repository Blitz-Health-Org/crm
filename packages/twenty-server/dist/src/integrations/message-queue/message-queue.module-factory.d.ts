import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { MessageQueueModuleOptions } from 'src/integrations/message-queue/interfaces';
export declare const messageQueueModuleFactory: (environmentService: EnvironmentService) => Promise<MessageQueueModuleOptions>;
