import { BeforeCreateOneHook, CreateOneInputType } from '@ptc-org/nestjs-query-graphql';
import { CreateRelationInput } from 'src/metadata/relation-metadata/dtos/create-relation.input';
export declare class BeforeCreateOneRelation<T extends CreateRelationInput> implements BeforeCreateOneHook<T, any> {
    run(instance: CreateOneInputType<T>, context: any): Promise<CreateOneInputType<T>>;
}
