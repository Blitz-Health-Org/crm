import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { FieldMetadata } from 'src/workspace/workspace-sync-metadata/decorators/field-metadata.decorator';
import { IsNullable } from 'src/workspace/workspace-sync-metadata/decorators/is-nullable.decorator';
import { ObjectMetadata } from 'src/workspace/workspace-sync-metadata/decorators/object-metadata.decorator';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';

@ObjectMetadata({
  namePlural: 'medicalPlans',
  labelSingular: 'Medical Plan',
  labelPlural: 'Medical Plans',
  description: 'Medical Plans associated with client',
  icon: 'IconBuildingSkyscraper',
})
export class MedicalPlanObjectMetadata extends BaseObjectMetadata {
  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Carrier',
    description: 'medical_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  carrierMedical: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Rep Contact Info',
    description: 'medical_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  repContactInfo: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Effective Date',
    description: 'medical_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  effectiveDate: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Renewed / Gurantee',
    description: 'medical_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  renewedguarantee: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Group Number',
    description: 'medical_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  groupNumber: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Employer Contribution',
    description: 'medical_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  employerContributionMedical: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Plan Name',
    description: 'medical_plan plan_name_1',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  planName1: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_1 EE_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate1EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_1 ES_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate1ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_1 EC_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate1EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_1 EF_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate1EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_1 EE_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled1EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_1 ES_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled1ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_1 EC_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled1EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_1 EF_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled1EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_1 EE_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium1EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_1 ES_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium1ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_1 EC_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium1EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_1 EF_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium1EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Plan Name',
    description: 'medical_plan plan_name_2',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  planName2: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_2 EE_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate2EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_2 ES_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate2ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_2 EC_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate2EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_2 EF_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate2EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_2 EE_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled2EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_2 ES_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled2ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_2 EC_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled2EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_2 EF_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled2EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_2 EE_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium2EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_2 ES_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium2ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_2 EC_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium2EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_2 EF_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium2EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Plan Name',
    description: 'medical_plan plan_name_3',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  planName3: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_3 EE_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate3EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_3 ES_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate3ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_3 EC_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate3EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_3 EF_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate3EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_3 EE_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled3EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_3 ES_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled3ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_3 EC_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled3EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_3 EF_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled3EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_3 EE_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium3EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_3 ES_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium3ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_3 EC_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium3EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_3 EF_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium3EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Plan Name',
    description: 'medical_plan plan_name_4',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  planName4: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_4 EE_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate4EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_4 ES_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate4ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_4 EC_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate4EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'medical_plan plan_name_4 EF_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  currentRate4EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_4 EE_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled4EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_4 ES_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled4ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_4 EC_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled4EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Enrolled',
    description: 'medical_plan plan_name_4 EF_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Enrolled4EF: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_4 EE_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium4EE: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_4 ES_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium4ES: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_4 EC_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium4EC: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Premium',
    description: 'medical_plan plan_name_4 EF_group_plan',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  monthlyPremium4EF: string;
}
