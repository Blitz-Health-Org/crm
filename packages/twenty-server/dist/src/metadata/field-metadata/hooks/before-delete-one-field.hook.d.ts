import { BeforeDeleteOneHook, DeleteOneInputType } from '@ptc-org/nestjs-query-graphql';
import { FieldMetadataService } from 'src/metadata/field-metadata/field-metadata.service';
export declare class BeforeDeleteOneField implements BeforeDeleteOneHook<any> {
    readonly fieldMetadataService: FieldMetadataService;
    constructor(fieldMetadataService: FieldMetadataService);
    run(instance: DeleteOneInputType, context: any): Promise<DeleteOneInputType>;
}
