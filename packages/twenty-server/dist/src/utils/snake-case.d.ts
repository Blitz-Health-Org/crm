import { SnakeCase, SnakeCasedPropertiesDeep } from 'type-fest';
export declare const snakeCase: <T>(text: T) => SnakeCase<T>;
export declare const snakeCaseDeep: <T>(value: T) => SnakeCasedPropertiesDeep<T>;
