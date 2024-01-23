import { DynamicModule } from '@nestjs/common';
import { MemoryStorageModuleAsyncOptions, MemoryStorageModuleOptions } from './interfaces';
export declare class MemoryStorageModule {
    static forRoot(options: MemoryStorageModuleOptions): DynamicModule;
    static forRootAsync(options: MemoryStorageModuleAsyncOptions): DynamicModule;
    private static createStorageDriver;
}
