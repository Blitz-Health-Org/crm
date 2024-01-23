import { FieldValue } from 'src/core/api-rest/types/api-rest-field-value.type';
export declare enum Conjunctions {
    or = "or",
    and = "and",
    not = "not"
}
export declare const parseFilter: (filterQuery: string, objectMetadataItem: any) => Record<string, FieldValue>;
