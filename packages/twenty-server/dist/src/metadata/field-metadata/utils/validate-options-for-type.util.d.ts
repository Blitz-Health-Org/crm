import { FieldMetadataOptions } from 'src/metadata/field-metadata/interfaces/field-metadata-options.interface';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { FieldMetadataComplexOptions, FieldMetadataDefaultOptions } from 'src/metadata/field-metadata/dtos/options.input';
export declare const optionsValidatorsMap: {
    RATING: (typeof FieldMetadataDefaultOptions)[];
    SELECT: (typeof FieldMetadataComplexOptions)[];
    MULTI_SELECT: (typeof FieldMetadataComplexOptions)[];
};
export declare const validateOptionsForType: (type: FieldMetadataType, options: FieldMetadataOptions) => boolean;
