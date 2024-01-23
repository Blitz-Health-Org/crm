import 'reflect-metadata';
import { GateDecoratorParams } from 'src/workspace/workspace-sync-metadata/interfaces/gate-decorator.interface';
import { ReflectFieldMetadata } from 'src/workspace/workspace-sync-metadata/interfaces/reflect-field-metadata.interface';
import { ReflectObjectMetadata } from 'src/workspace/workspace-sync-metadata/interfaces/reflect-object-metadata.interface';
import { ReflectRelationMetadata } from 'src/workspace/workspace-sync-metadata/interfaces/reflect-relation-metadata.interface';
export interface ReflectMetadataTypeMap {
    objectMetadata: ReflectObjectMetadata;
    fieldMetadata: ReflectFieldMetadata;
    relationMetadata: ReflectRelationMetadata[];
    gate: GateDecoratorParams;
    isNullable: true;
    isSystem: true;
}
export declare class TypedReflect {
    static defineMetadata<T extends keyof ReflectMetadataTypeMap>(metadataKey: T, metadataValue: ReflectMetadataTypeMap[T], target: object): void;
    static defineMetadata<T extends keyof ReflectMetadataTypeMap>(metadataKey: T, metadataValue: ReflectMetadataTypeMap[T], target: object, propertyKey: string): void;
    static getMetadata<T extends keyof ReflectMetadataTypeMap>(metadataKey: T, target: object): ReflectMetadataTypeMap[T] | undefined;
    static getMetadata<T extends keyof ReflectMetadataTypeMap>(metadataKey: T, target: object, propertyKey: string): ReflectMetadataTypeMap[T] | undefined;
}
