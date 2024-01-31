import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { FieldMetadata } from 'src/workspace/workspace-sync-metadata/decorators/field-metadata.decorator';
import { IsNullable } from 'src/workspace/workspace-sync-metadata/decorators/is-nullable.decorator';
import { ObjectMetadata } from 'src/workspace/workspace-sync-metadata/decorators/object-metadata.decorator';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { CompanyObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/company.object-metadata';
import { RelationMetadata } from 'src/workspace/workspace-sync-metadata/decorators/relation-metadata.decorator';
import { RelationMetadataType } from 'src/metadata/relation-metadata/relation-metadata.entity';
import { CommissionLineObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/commission-line.object-metadata';

@ObjectMetadata({
  namePlural: 'visionPlans',
  labelSingular: 'Vision Plan',
  labelPlural: 'Vision_Plans',
  description: 'A dental plan',
  icon: 'IconBuildingSkyscraper', // TODO BLUME: Fix this icon
})
export class VisionPlanObjectMetadata extends BaseObjectMetadata {
  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Plan Name',
    description: 'vision_plan plan_name_6',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  planName6: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Plan Notes',
    description: 'vision_plan plan_name_6',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  planNotes6: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'vision_plan plan_name_6 EE_group_plan_6',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate6EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'vision_plan plan_name_6 EE_group_plan_6',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate6ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'vision_plan plan_name_6 EC_group_plan_6',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate6EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'vision_plan plan_name_6 EF_group_plan_6',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate6EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'vision_plan plan_name_6 EE_group_plan_6',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled6EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'vision_plan plan_name_6 ES_group_plan_6',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled6ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'vision_plan plan_name_6 EC_group_plan_6',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled6EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'vision_plan plan_name_6 EF_group_plan_6',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled6EF: string;

  //Relations
  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Company',
    description: "Dental plan's company",
    icon: 'IconBuildingSkyscraper',
    joinColumn: 'companyId',
  })
  @IsNullable()
  company: CompanyObjectMetadata;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Commission Line',
    description: 'Commission line for vision plan',
    icon: 'IconBuildingSkyscraper', //TODO BLUME: icon
    joinColumn: 'commissionLineId',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_ONE,
    objectName: 'commissionLine',
  })
  @IsNullable()
  commissionLine: CommissionLineObjectMetadata;
}
