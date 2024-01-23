import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { LoggerModuleOptions } from 'src/integrations/logger/interfaces';
export declare const loggerModuleFactory: (environmentService: EnvironmentService) => Promise<LoggerModuleOptions>;
