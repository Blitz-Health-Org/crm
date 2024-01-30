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
  namePlural: 'dentalPlans',
  labelSingular: 'Dental_Plan',
  labelPlural: 'Dental_Plans',
  description: 'A dental plan',
  icon: 'IconBuildingSkyscraper', // TODO BLUME: Fix this icon
})
export class DentalPlanObjectMetadata extends BaseObjectMetadata {
  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Carrier',
    description: 'dental_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  carrierDental: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Rep Contact Info',
    description: 'dental_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  repContactInfoDental: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Effective Date',
    description: 'dental_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  effectiveDateDental: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Renewed / Gurantee',
    description: 'dental_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  renewedguaranteeDental: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Group Number',
    description: 'dental_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  groupNumberDental: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Employer Contribution',
    description: 'dental_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  employerContributionDental: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Plan Name',
    description: 'dental_plan plan_name_5',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  planName5: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Plan Notes',
    description: 'dental_plan plan_name_5',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  planNotes5: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'dental_plan plan_name_5 EE_group_plan_5',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate5EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'dental_plan plan_name_5 EE_group_plan_5',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate5ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'dental_plan plan_name_5 EC_group_plan_5',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate5EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'dental_plan plan_name_5 EF_group_plan_5',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate5EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'dental_plan plan_name_5 EE_group_plan_5',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled5EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'dental_plan plan_name_5 ES_group_plan_5',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled5ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'dental_plan plan_name_5 EC_group_plan_5',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled5EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'dental_plan plan_name_5 EF_group_plan_5',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled5EF: string;

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
    description: 'Commission line for dental plan',
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
