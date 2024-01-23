import { DataSourceOptions } from 'typeorm';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
export type DataSourceType = DataSourceOptions['type'];
export declare class DataSourceEntity {
    id: string;
    label: string;
    url: string;
    schema: string;
    type: DataSourceType;
    isRemote: boolean;
    objects: ObjectMetadataEntity[];
    workspaceId: string;
    createdAt: Date;
    updatedAt: Date;
}
