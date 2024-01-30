import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { RelationMetadataType } from 'src/metadata/relation-metadata/relation-metadata.entity';
import { FieldMetadata } from 'src/workspace/workspace-sync-metadata/decorators/field-metadata.decorator';
import { IsNullable } from 'src/workspace/workspace-sync-metadata/decorators/is-nullable.decorator';
import { ObjectMetadata } from 'src/workspace/workspace-sync-metadata/decorators/object-metadata.decorator';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { CompanyObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/company.object-metadata';
import { RelationMetadata } from 'src/workspace/workspace-sync-metadata/decorators/relation-metadata.decorator';
import { CommissionLineObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/commission-line.object-metadata';

@ObjectMetadata({
  namePlural: 'medicalPlans',
  labelSingular: 'Medical_Plan',
  labelPlural: 'Medical_Plans',
  description: 'Medical Plans associated with client',
  icon: 'IconUsers',
})
export class MedicalPlanObjectMetadata extends BaseObjectMetadata {
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

  //Relations
  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Company',
    description: "Medical plan's company",
    icon: 'IconBuildingSkyscraper',
    joinColumn: 'companyId',
  })
  @IsNullable()
  company: CompanyObjectMetadata;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Commission Line',
    description: 'Commission line for medical plan',
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
