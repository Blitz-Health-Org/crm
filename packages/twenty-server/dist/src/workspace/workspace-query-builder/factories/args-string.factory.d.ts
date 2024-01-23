import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
import { ArgsAliasFactory } from './args-alias.factory';
export declare class ArgsStringFactory {
    private readonly argsAliasFactory;
    constructor(argsAliasFactory: ArgsAliasFactory);
    create(initialArgs: Record<string, any> | undefined, fieldMetadataCollection: FieldMetadataInterface[]): string | null;
}
