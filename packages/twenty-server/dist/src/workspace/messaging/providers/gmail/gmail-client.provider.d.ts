import { gmail_v1 } from 'googleapis';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
export declare class GmailClientProvider {
    private readonly environmentService;
    constructor(environmentService: EnvironmentService);
    getGmailClient(refreshToken: string): Promise<gmail_v1.Gmail>;
    private getOAuth2Client;
}
