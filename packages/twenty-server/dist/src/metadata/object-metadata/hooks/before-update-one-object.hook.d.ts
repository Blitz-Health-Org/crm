import { BeforeUpdateOneHook, UpdateOneInputType } from '@ptc-org/nestjs-query-graphql';
import { Repository } from 'typeorm';
import { FieldMetadataEntity } from 'src/metadata/field-metadata/field-metadata.entity';
import { UpdateObjectInput } from 'src/metadata/object-metadata/dtos/update-object.input';
import { ObjectMetadataService } from 'src/metadata/object-metadata/object-metadata.service';
export declare class BeforeUpdateOneObject<T extends UpdateObjectInput> implements BeforeUpdateOneHook<T, any> {
    readonly objectMetadataService: ObjectMetadataService;
    private readonly fieldMetadataRepository;
    constructor(objectMetadataService: ObjectMetadataService, fieldMetadataRepository: Repository<FieldMetadataEntity>);
    run(instance: UpdateOneInputType<T>, context: any): Promise<UpdateOneInputType<T>>;
    private checkIfFieldIsEditable;
}
