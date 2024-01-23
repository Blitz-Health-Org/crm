import { ExceptionHandlerDriverInterface } from 'src/integrations/exception-handler/interfaces';
export declare class ExceptionHandlerService {
    private driver;
    constructor(driver: ExceptionHandlerDriverInterface);
    captureException(exception: unknown): void;
}
