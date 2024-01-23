import { HttpException } from '@nestjs/common';
type Assert = (condition: unknown, message?: string, ErrorType?: new (message?: string) => HttpException) => asserts condition;
export declare const assert: Assert;
export declare const assertNotNull: <T>(item: T) => item is NonNullable<T>;
export {};
