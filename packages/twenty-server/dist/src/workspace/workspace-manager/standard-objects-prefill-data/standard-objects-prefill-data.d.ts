import { DataSource } from 'typeorm';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
export declare const standardObjectsPrefillData: (workspaceDataSource: DataSource, schemaName: string, objectMetadata: ObjectMetadataEntity[]) => Promise<void>;
