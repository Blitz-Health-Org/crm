import { CurrencyMetadata } from 'src/metadata/field-metadata/composite-types/currency.composite-type';
import { ActivityTargetObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/activity-target.object-metadata';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { CompanyObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/company.object-metadata';
import { FavoriteObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/favorite.object-metadata';
import { PersonObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/person.object-metadata';
import { PipelineStepObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/pipeline-step.object-metadata';
export declare class OpportunityObjectMetadata extends BaseObjectMetadata {
    name: string;
    amount: CurrencyMetadata;
    closeDate: Date;
    probability: string;
    pipelineStep: PipelineStepObjectMetadata;
    pointOfContact: PersonObjectMetadata;
    company: CompanyObjectMetadata;
    favorites: FavoriteObjectMetadata[];
    activityTargets: ActivityTargetObjectMetadata[];
}
