import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
export declare const currencyFields: (fieldMetadata?: FieldMetadataInterface) => FieldMetadataInterface[];
export declare const currencyObjectDefinition: {
    id: string;
    nameSingular: string;
    namePlural: string;
    labelSingular: string;
    labelPlural: string;
    targetTableName: string;
    fields: FieldMetadataInterface<"default">[];
    fromRelations: never[];
    toRelations: never[];
    isActive: true;
    isSystem: true;
    isCustom: false;
};
export type CurrencyMetadata = {
    amountMicros: number;
    currencyCode: string;
};
