import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { ViewObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/view.object-metadata';
export declare class ViewFilterObjectMetadata extends BaseObjectMetadata {
    fieldMetadataId: string;
    operand: string;
    value: string;
    displayValue: string;
    view: ViewObjectMetadata;
}
