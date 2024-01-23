import { GraphQLResolveInfo } from 'graphql';
import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { ObjectMetadataService } from 'src/metadata/object-metadata/object-metadata.service';
import { FieldsStringFactory } from './fields-string.factory';
import { ArgsStringFactory } from './args-string.factory';
export declare class RelationFieldAliasFactory {
    private readonly fieldsStringFactory;
    private readonly argsStringFactory;
    private readonly objectMetadataService;
    private logger;
    constructor(fieldsStringFactory: FieldsStringFactory, argsStringFactory: ArgsStringFactory, objectMetadataService: ObjectMetadataService);
    create(fieldKey: string, fieldValue: any, fieldMetadata: FieldMetadataInterface, objectMetadataCollection: ObjectMetadataInterface[], info: GraphQLResolveInfo): Promise<string>;
    private createRelationAlias;
}
