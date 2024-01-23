import { SendMailOptions } from 'nodemailer';
import { EmailDriver } from 'src/integrations/email/drivers/interfaces/email-driver.interface';
export declare class LoggerDriver implements EmailDriver {
    private readonly logger;
    send(sendMailOptions: SendMailOptions): Promise<void>;
}
