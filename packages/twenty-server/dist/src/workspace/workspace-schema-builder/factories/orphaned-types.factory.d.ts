import { GraphQLNamedType } from 'graphql';
import { TypeDefinitionsStorage } from 'src/workspace/workspace-schema-builder/storages/type-definitions.storage';
export declare class OrphanedTypesFactory {
    private readonly typeDefinitionsStorage;
    constructor(typeDefinitionsStorage: TypeDefinitionsStorage);
    create(): GraphQLNamedType[];
}
