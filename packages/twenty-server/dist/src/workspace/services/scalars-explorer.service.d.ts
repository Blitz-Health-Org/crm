import { GraphQLScalarType, GraphQLSchema } from 'graphql';
export declare class ScalarsExplorerService {
    private scalarImplementations;
    constructor();
    getScalarImplementation(scalarName: string): GraphQLScalarType | undefined;
    getUsedScalarNames(schema: GraphQLSchema): string[];
    getScalarResolvers(usedScalarNames: string[]): Record<string, GraphQLScalarType>;
}
