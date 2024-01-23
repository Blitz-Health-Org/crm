import { DataSource } from 'typeorm';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
export declare const seedViews: (workspaceDataSource: DataSource, schemaName: string, objectMetadataMap: Record<string, ObjectMetadataEntity>) => Promise<void>;
