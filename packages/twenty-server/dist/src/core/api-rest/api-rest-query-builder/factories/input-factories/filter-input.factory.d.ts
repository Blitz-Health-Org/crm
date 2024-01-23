import { Request } from 'express';
import { FieldValue } from 'src/core/api-rest/types/api-rest-field-value.type';
export declare class FilterInputFactory {
    create(request: Request, objectMetadata: any): Record<string, FieldValue>;
}
