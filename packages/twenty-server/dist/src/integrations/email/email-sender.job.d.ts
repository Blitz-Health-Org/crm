import { SendMailOptions } from 'nodemailer';
import { MessageQueueJob } from 'src/integrations/message-queue/interfaces/message-queue-job.interface';
import { EmailSenderService } from 'src/integrations/email/email-sender.service';
export declare class EmailSenderJob implements MessageQueueJob<SendMailOptions> {
    private readonly emailSenderService;
    private readonly logger;
    constructor(emailSenderService: EmailSenderService);
    handle(data: SendMailOptions): Promise<void>;
}
