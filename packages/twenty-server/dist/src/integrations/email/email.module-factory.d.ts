import { EmailModuleOptions } from 'src/integrations/email/interfaces/email.interface';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
export declare const emailModuleFactory: (environmentService: EnvironmentService) => EmailModuleOptions;
