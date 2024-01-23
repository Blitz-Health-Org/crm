import { DynamicModule } from '@nestjs/common';
import { ConfigurableModuleClass, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE } from './exception-handler.module-definition';
export declare class ExceptionHandlerModule extends ConfigurableModuleClass {
    static forRoot(options: typeof OPTIONS_TYPE): DynamicModule;
    static forRootAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule;
}
