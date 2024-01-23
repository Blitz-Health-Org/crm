import { FieldMetadataInterface } from 'src/metadata/field-metadata/interfaces/field-metadata.interface';
export declare class ArgsAliasFactory {
    create(args: Record<string, any>, fieldMetadataCollection: FieldMetadataInterface[]): Record<string, any>;
    private createArgsObjectRecursive;
}
