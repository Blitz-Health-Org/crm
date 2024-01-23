import { DynamicModule } from '@nestjs/common';
import { EmailModuleAsyncOptions } from 'src/integrations/email/interfaces/email.interface';
export declare class EmailModule {
    static forRoot(options: EmailModuleAsyncOptions): DynamicModule;
}
