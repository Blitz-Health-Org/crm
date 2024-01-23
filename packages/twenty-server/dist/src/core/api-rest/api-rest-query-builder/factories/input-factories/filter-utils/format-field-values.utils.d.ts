import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { FieldValue } from 'src/core/api-rest/types/api-rest-field-value.type';
export declare const formatFieldValue: (value: string, fieldType?: FieldMetadataType, comparator?: string) => FieldValue;
