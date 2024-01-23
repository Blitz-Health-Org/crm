import { SendMailOptions } from 'nodemailer';
import SMTPConnection from 'nodemailer/lib/smtp-connection';
import { EmailDriver } from 'src/integrations/email/drivers/interfaces/email-driver.interface';
export declare class SmtpDriver implements EmailDriver {
    private transport;
    constructor(options: SMTPConnection.Options);
    send(sendMailOptions: SendMailOptions): Promise<void>;
}
