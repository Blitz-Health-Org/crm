import { GraphQLEnumType } from 'graphql';
import { WorkspaceBuildSchemaOptions } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
export interface EnumTypeDefinition {
    target: string;
    type: GraphQLEnumType;
}
export declare class EnumTypeDefinitionFactory {
    private readonly logger;
    create(objectMetadata: ObjectMetadataInterface, options: WorkspaceBuildSchemaOptions): EnumTypeDefinition[];
    private generateEnum;
}
