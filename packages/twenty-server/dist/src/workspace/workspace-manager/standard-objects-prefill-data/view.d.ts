import { EntityManager } from 'typeorm';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
export declare const viewPrefillData: (entityManager: EntityManager, schemaName: string, objectMetadataMap: Record<string, ObjectMetadataEntity>) => Promise<void>;
