import { SendMailOptions } from 'nodemailer';
import { EmailDriver } from 'src/integrations/email/drivers/interfaces/email-driver.interface';
export declare class EmailSenderService implements EmailDriver {
    private driver;
    constructor(driver: EmailDriver);
    send(sendMailOptions: SendMailOptions): Promise<void>;
}
