import { FieldMetadataDecoratorParams } from 'src/workspace/workspace-sync-metadata/interfaces/reflect-field-metadata.interface';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
export declare function FieldMetadata<T extends FieldMetadataType>(params: FieldMetadataDecoratorParams<T>): PropertyDecorator;
