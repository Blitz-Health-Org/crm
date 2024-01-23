import { BeforeDeleteOneHook, DeleteOneInputType } from '@ptc-org/nestjs-query-graphql';
import { ObjectMetadataService } from 'src/metadata/object-metadata/object-metadata.service';
export declare class BeforeDeleteOneObject implements BeforeDeleteOneHook<any> {
    readonly objectMetadataService: ObjectMetadataService;
    constructor(objectMetadataService: ObjectMetadataService);
    run(instance: DeleteOneInputType, context: any): Promise<DeleteOneInputType>;
}
