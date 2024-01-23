import { YogaDriverConfig } from '@graphql-yoga/nestjs';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { ExceptionHandlerService } from 'src/integrations/exception-handler/exception-handler.service';
export declare const metadataModuleFactory: (environmentService: EnvironmentService, exceptionHandlerService: ExceptionHandlerService) => Promise<YogaDriverConfig>;
