export declare class FieldMetadataDefaultValueString {
    value: string | null;
}
export declare class FieldMetadataDefaultValueNumber {
    value: number | null;
}
export declare class FieldMetadataDefaultValueBoolean {
    value: boolean | null;
}
export declare class FieldMetadataDefaultValueStringArray {
    value: string[] | null;
}
export declare class FieldMetadataDefaultValueDateTime {
    value: Date | null;
}
export declare class FieldMetadataDefaultValueLink {
    label: string | null;
    url: string | null;
}
export declare class FieldMetadataDefaultValueCurrency {
    amountMicros: string | null;
    currencyCode: string | null;
}
export declare class FieldMetadataDefaultValueFullName {
    firstName: string | null;
    lastName: string | null;
}
export declare class FieldMetadataDynamicDefaultValueUuid {
    type: 'uuid';
}
export declare class FieldMetadataDynamicDefaultValueNow {
    type: 'now';
}
