import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { ViewObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/view.object-metadata';
export declare class ViewFieldObjectMetadata extends BaseObjectMetadata {
    fieldMetadataId: string;
    isVisible: boolean;
    size: number;
    position: number;
    view?: ViewObjectMetadata;
}
