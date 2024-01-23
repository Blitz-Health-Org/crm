import { HttpAdapterHost } from '@nestjs/core';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { OPTIONS_TYPE } from 'src/integrations/exception-handler/exception-handler.module-definition';
export declare const exceptionHandlerModuleFactory: (environmentService: EnvironmentService, adapterHost: HttpAdapterHost) => Promise<typeof OPTIONS_TYPE>;
