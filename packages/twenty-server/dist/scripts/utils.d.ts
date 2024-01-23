import { DataSource } from 'typeorm';
export declare const connectionSource: DataSource;
export declare const camelToSnakeCase: (str: any) => any;
export declare const performQuery: (query: string, consoleDescription: string, withLog?: boolean, ignoreAlreadyExistsError?: boolean) => Promise<any>;
