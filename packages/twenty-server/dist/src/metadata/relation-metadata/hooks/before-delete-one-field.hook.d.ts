import { BeforeDeleteOneHook, DeleteOneInputType } from '@ptc-org/nestjs-query-graphql';
import { RelationMetadataService } from 'src/metadata/relation-metadata/relation-metadata.service';
export declare class BeforeDeleteOneRelation implements BeforeDeleteOneHook<any> {
    readonly relationMetadataService: RelationMetadataService;
    constructor(relationMetadataService: RelationMetadataService);
    run(instance: DeleteOneInputType, context: any): Promise<DeleteOneInputType>;
}
