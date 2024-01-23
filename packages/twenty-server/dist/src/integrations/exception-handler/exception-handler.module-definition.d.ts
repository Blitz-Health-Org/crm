import { FactoryProvider, ModuleMetadata } from '@nestjs/common';
import { ExceptionHandlerModuleOptions } from './interfaces';
export declare const ConfigurableModuleClass: import("@nestjs/common").ConfigurableModuleCls<ExceptionHandlerModuleOptions, "forRoot", "create", {}>, MODULE_OPTIONS_TOKEN: string | symbol, OPTIONS_TYPE: ExceptionHandlerModuleOptions & Partial<{}>, ASYNC_OPTIONS_TYPE: import("@nestjs/common").ConfigurableModuleAsyncOptions<ExceptionHandlerModuleOptions, "create"> & Partial<{}>;
export type ExceptionHandlerModuleAsyncOptions = {
    useFactory: (...args: any[]) => ExceptionHandlerModuleOptions | Promise<ExceptionHandlerModuleOptions>;
} & Pick<ModuleMetadata, 'imports'> & Pick<FactoryProvider, 'inject'>;
