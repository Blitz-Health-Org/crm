import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { FileStorageModuleOptions } from 'src/integrations/file-storage/interfaces';
export declare const fileStorageModuleFactory: (environmentService: EnvironmentService) => Promise<FileStorageModuleOptions>;
