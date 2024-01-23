import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { ViewFieldObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/view-field.object-metadata';
import { ViewFilterObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/view-filter.object-metadata';
import { ViewSortObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/view-sort.object-metadata';
export declare class ViewObjectMetadata extends BaseObjectMetadata {
    name: string;
    objectMetadataId: string;
    type: string;
    viewFields: ViewFieldObjectMetadata[];
    viewFilters: ViewFilterObjectMetadata[];
    viewSorts: ViewSortObjectMetadata[];
}
