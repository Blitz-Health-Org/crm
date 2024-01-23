import { DynamicModule } from '@nestjs/common';
import { FileStorageModuleAsyncOptions, FileStorageModuleOptions } from './interfaces';
export declare class FileStorageModule {
    static forRoot(options: FileStorageModuleOptions): DynamicModule;
    static forRootAsync(options: FileStorageModuleAsyncOptions): DynamicModule;
}
