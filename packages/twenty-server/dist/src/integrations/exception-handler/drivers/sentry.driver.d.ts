import { ExceptionHandlerDriverInterface, ExceptionHandlerSentryDriverFactoryOptions } from 'src/integrations/exception-handler/interfaces';
export declare class ExceptionHandlerSentryDriver implements ExceptionHandlerDriverInterface {
    constructor(options: ExceptionHandlerSentryDriverFactoryOptions['options']);
    captureException(exception: Error): void;
    captureMessage(message: string): void;
}
