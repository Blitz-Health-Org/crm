import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { ClientConfig } from './client-config.entity';
export declare class ClientConfigResolver {
    private environmentService;
    constructor(environmentService: EnvironmentService);
    clientConfig(): Promise<ClientConfig>;
}
