import { GraphQLInputObjectType, GraphQLInputType, GraphQLScalarType, GraphQLType } from 'graphql';
import { DateScalarMode, NumberScalarMode } from 'src/workspace/workspace-schema-builder/interfaces/workspace-build-schema-optionts.interface';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
export interface TypeOptions<T = any> {
    nullable?: boolean;
    isArray?: boolean;
    arrayDepth?: number;
    defaultValue?: T;
}
export declare class TypeMapperService {
    mapToScalarType(fieldMetadataType: FieldMetadataType, dateScalarMode?: DateScalarMode, numberScalarMode?: NumberScalarMode): GraphQLScalarType | undefined;
    mapToFilterType(fieldMetadataType: FieldMetadataType, dateScalarMode?: DateScalarMode, numberScalarMode?: NumberScalarMode): GraphQLInputObjectType | GraphQLScalarType | undefined;
    mapToOrderByType(fieldMetadataType: FieldMetadataType): GraphQLInputType | undefined;
    mapToGqlType<T extends GraphQLType = GraphQLType>(typeRef: T, options: TypeOptions): T;
    private mapToGqlList;
}
