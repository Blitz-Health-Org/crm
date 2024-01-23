import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
export declare const fieldNumber: {
    name: string;
    type: FieldMetadataType;
    isNullable: boolean;
    defaultValue: null;
    targetColumnMap: {
        value: string;
    };
};
export declare const fieldString: {
    name: string;
    type: FieldMetadataType;
    isNullable: boolean;
    defaultValue: null;
    targetColumnMap: {
        value: string;
    };
};
export declare const fieldLink: {
    name: string;
    type: FieldMetadataType;
    isNullable: boolean;
    defaultValue: {
        label: string;
        url: string;
    };
    targetColumnMap: {
        label: string;
        url: string;
    };
};
export declare const fieldCurrency: {
    name: string;
    type: FieldMetadataType;
    isNullable: boolean;
    defaultValue: null;
    targetColumnMap: {
        amountMicros: string;
        currencyCode: string;
    };
};
export declare const objectMetadataItem: DeepPartial<ObjectMetadataEntity>;
