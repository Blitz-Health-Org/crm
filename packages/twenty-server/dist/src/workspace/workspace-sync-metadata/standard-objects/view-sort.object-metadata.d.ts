import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { ViewObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/view.object-metadata';
export declare class ViewSortObjectMetadata extends BaseObjectMetadata {
    fieldMetadataId: string;
    direction: string;
    view: ViewObjectMetadata;
}
