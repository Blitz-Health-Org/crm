import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
export declare const isCompositeFieldMetadataType: (type: FieldMetadataType) => type is FieldMetadataType.LINK | FieldMetadataType.CURRENCY | FieldMetadataType.FULL_NAME;
