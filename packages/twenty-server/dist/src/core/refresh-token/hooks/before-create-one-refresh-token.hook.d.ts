import { BeforeCreateOneHook, CreateOneInputType } from '@ptc-org/nestjs-query-graphql';
import { RefreshToken } from 'src/core/refresh-token/refresh-token.entity';
export declare class BeforeCreateOneRefreshToken<T extends RefreshToken> implements BeforeCreateOneHook<T, any> {
    run(instance: CreateOneInputType<T>, context: any): Promise<CreateOneInputType<T>>;
}
