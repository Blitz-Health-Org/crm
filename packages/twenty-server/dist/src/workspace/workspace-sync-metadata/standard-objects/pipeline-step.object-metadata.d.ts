import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { OpportunityObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/opportunity.object-metadata';
export declare class PipelineStepObjectMetadata extends BaseObjectMetadata {
    name: string;
    color: string;
    position: number;
    opportunities: OpportunityObjectMetadata[];
}
