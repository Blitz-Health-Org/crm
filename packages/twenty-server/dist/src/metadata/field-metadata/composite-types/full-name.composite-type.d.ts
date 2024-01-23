import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
export declare const fullNameFields: (fieldMetadata?: FieldMetadataInterface) => FieldMetadataInterface[];
export declare const fullNameObjectDefinition: {
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
export type FullNameMetadata = {
    firstName: string;
    lastName: string;
};
