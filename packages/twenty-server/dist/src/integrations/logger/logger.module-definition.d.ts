import { FactoryProvider, ModuleMetadata } from '@nestjs/common';
import { LoggerModuleOptions } from './interfaces';
export declare const ConfigurableModuleClass: import("@nestjs/common").ConfigurableModuleCls<import("./interfaces").ConsoleDriverFactoryOptions, "forRoot", "create", {}>, MODULE_OPTIONS_TOKEN: string | symbol, OPTIONS_TYPE: import("./interfaces").ConsoleDriverFactoryOptions & Partial<{}>, ASYNC_OPTIONS_TYPE: import("@nestjs/common").ConfigurableModuleAsyncOptions<import("./interfaces").ConsoleDriverFactoryOptions, "create"> & Partial<{}>;
export type LoggerModuleAsyncOptions = {
    useFactory: (...args: any[]) => LoggerModuleOptions | Promise<LoggerModuleOptions>;
} & Pick<ModuleMetadata, 'imports'> & Pick<FactoryProvider, 'inject'>;
