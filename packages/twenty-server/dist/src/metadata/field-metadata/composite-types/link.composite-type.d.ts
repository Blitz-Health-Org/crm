import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
export declare const linkFields: (fieldMetadata?: FieldMetadataInterface) => FieldMetadataInterface[];
export declare const linkObjectDefinition: {
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
export type LinkMetadata = {
    label: string;
    url: string;
};
