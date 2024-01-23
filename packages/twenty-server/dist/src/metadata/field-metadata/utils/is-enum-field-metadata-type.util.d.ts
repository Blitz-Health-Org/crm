import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
export declare const isEnumFieldMetadataType: (type: FieldMetadataType) => type is FieldMetadataType.RATING | FieldMetadataType.SELECT | FieldMetadataType.MULTI_SELECT;
