import { GraphQLResolveInfo } from 'graphql';
import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { FieldAliasFacotry } from './field-alias.factory';
import { RelationFieldAliasFactory } from './relation-field-alias.factory';
export declare class FieldsStringFactory {
    private readonly fieldAliasFactory;
    private readonly relationFieldAliasFactory;
    private readonly logger;
    constructor(fieldAliasFactory: FieldAliasFacotry, relationFieldAliasFactory: RelationFieldAliasFactory);
    create(info: GraphQLResolveInfo, fieldMetadataCollection: FieldMetadataInterface[], objectMetadataCollection: ObjectMetadataInterface[]): Promise<string>;
    createFieldsStringRecursive(info: GraphQLResolveInfo, selectedFields: Record<string, any>, fieldMetadataCollection: FieldMetadataInterface[], objectMetadataCollection: ObjectMetadataInterface[], accumulator?: string): Promise<string>;
}
