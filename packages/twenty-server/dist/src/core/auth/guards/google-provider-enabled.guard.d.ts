import { CanActivate } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
export declare class GoogleProviderEnabledGuard implements CanActivate {
    private readonly environmentService;
    constructor(environmentService: EnvironmentService);
    canActivate(): boolean | Promise<boolean> | Observable<boolean>;
}
