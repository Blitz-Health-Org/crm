import { DataSource } from 'typeorm';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
export declare const demoObjectsPrefillData: (workspaceDataSource: DataSource, schemaName: string, objectMetadata: ObjectMetadataEntity[]) => Promise<void>;
