import { FieldMetadataDefaultValue } from 'src/metadata/field-metadata/interfaces/field-metadata-default-value.interface';
import { FieldMetadataOptions } from 'src/metadata/field-metadata/interfaces/field-metadata-options.interface';
import { FieldMetadataTargetColumnMap } from 'src/metadata/field-metadata/interfaces/field-metadata-target-column-map.interface';
export declare const filterIgnoredProperties: (obj: any, propertiesToIgnore: string[], mapFunction?: ((value: any) => any) | undefined) => {
    [k: string]: any;
};
export declare const mapObjectMetadataByUniqueIdentifier: <T extends {
    nameSingular: string;
    fields: U[];
}, U extends {
    name: string;
}>(arr: T[]) => Record<string, Omit<T, "fields"> & {
    fields: Record<string, U>;
}>;
export declare const convertStringifiedFieldsToJSON: <T extends {
    targetColumnMap?: string | null | undefined;
    defaultValue?: string | null | undefined;
    options?: string | null | undefined;
}>(fieldMetadata: T) => T & {
    targetColumnMap?: {
        [key: string]: string;
    } | undefined;
    defaultValue?: (import("../../../metadata/field-metadata/dtos/default-value.input").FieldMetadataDefaultValueLink | import("../../../metadata/field-metadata/dtos/default-value.input").FieldMetadataDefaultValueCurrency | import("../../../metadata/field-metadata/dtos/default-value.input").FieldMetadataDefaultValueFullName | (import("../../../metadata/field-metadata/dtos/default-value.input").FieldMetadataDefaultValueString | import("../../../metadata/field-metadata/dtos/default-value.input").FieldMetadataDefaultValueNumber | import("../../../metadata/field-metadata/dtos/default-value.input").FieldMetadataDefaultValueBoolean | import("../../../metadata/field-metadata/dtos/default-value.input").FieldMetadataDefaultValueDateTime) | import("src/metadata/field-metadata/interfaces/field-metadata-default-value.interface").FieldMetadataDynamicDefaultValue) | null | undefined;
    options?: import("../../../metadata/field-metadata/dtos/options.input").FieldMetadataDefaultOptions[] | import("../../../metadata/field-metadata/dtos/options.input").FieldMetadataComplexOptions[] | undefined;
};
