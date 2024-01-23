import { HttpService } from '@nestjs/axios';
import { CompanyInteface } from 'src/core/quick-actions/interfaces/company.interface';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
export declare class IntelligenceService {
    private readonly environmentService;
    private readonly httpService;
    constructor(environmentService: EnvironmentService, httpService: HttpService);
    enrichCompany(domainName: string): Promise<CompanyInteface>;
    completeWithAi(content: string): Promise<import("axios").AxiosResponse<any, any>>;
}
