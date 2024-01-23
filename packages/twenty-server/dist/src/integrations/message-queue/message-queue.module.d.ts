import { DynamicModule } from '@nestjs/common';
import { MessageQueueModuleAsyncOptions } from 'src/integrations/message-queue/interfaces';
export declare class MessageQueueModule {
    static forRoot(options: MessageQueueModuleAsyncOptions): DynamicModule;
}
