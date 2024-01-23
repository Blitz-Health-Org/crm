interface DecoratorOptions {
    allowUndefined?: boolean;
}
export declare const AuthUser: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | DecoratorOptions | undefined)[]) => ParameterDecorator;
export {};
