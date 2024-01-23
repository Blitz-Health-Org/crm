import { ExceptionHandlerDriverInterface } from 'src/integrations/exception-handler/interfaces';
export declare class ExceptionHandlerConsoleDriver implements ExceptionHandlerDriverInterface {
    captureException(exception: unknown): void;
    captureMessage(message: string): void;
}
