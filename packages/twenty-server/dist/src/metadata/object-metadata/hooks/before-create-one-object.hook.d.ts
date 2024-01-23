import { BeforeCreateOneHook, CreateOneInputType } from '@ptc-org/nestjs-query-graphql';
import { CreateObjectInput } from 'src/metadata/object-metadata/dtos/create-object.input';
export declare class BeforeCreateOneObject<T extends CreateObjectInput> implements BeforeCreateOneHook<T, any> {
    run(instance: CreateOneInputType<T>, context: any): Promise<CreateOneInputType<T>>;
}
