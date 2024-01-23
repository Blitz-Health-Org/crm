import { LogLevel, LoggerService as LoggerServiceInterface } from '@nestjs/common';
export declare class LoggerService implements LoggerServiceInterface {
    private driver;
    constructor(driver: LoggerServiceInterface);
    log(message: any, category: string, ...optionalParams: any[]): void;
    error(message: any, category: string, ...optionalParams: any[]): void;
    warn(message: any, category: string, ...optionalParams: any[]): void;
    debug?(message: any, category: string, ...optionalParams: any[]): void;
    verbose?(message: any, category: string, ...optionalParams: any[]): void;
    setLogLevels(levels: LogLevel[]): void;
}
