import { SendMailOptions } from 'nodemailer';
import { MessageQueueService } from 'src/integrations/message-queue/services/message-queue.service';
export declare class EmailService {
    private readonly messageQueueService;
    constructor(messageQueueService: MessageQueueService);
    send(sendMailOptions: SendMailOptions): Promise<void>;
}
