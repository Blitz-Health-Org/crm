import { CurrencyMetadata } from 'src/metadata/field-metadata/composite-types/currency.composite-type';
import { LinkMetadata } from 'src/metadata/field-metadata/composite-types/link.composite-type';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { RelationMetadataType } from 'src/metadata/relation-metadata/relation-metadata.entity';
import { FieldMetadata } from 'src/workspace/workspace-sync-metadata/decorators/field-metadata.decorator';
import { IsNullable } from 'src/workspace/workspace-sync-metadata/decorators/is-nullable.decorator';
import { ObjectMetadata } from 'src/workspace/workspace-sync-metadata/decorators/object-metadata.decorator';
import { RelationMetadata } from 'src/workspace/workspace-sync-metadata/decorators/relation-metadata.decorator';
import { ActivityTargetObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/activity-target.object-metadata';
import { AttachmentObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/attachment.object-metadata';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { FavoriteObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/favorite.object-metadata';
import { OpportunityObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/opportunity.object-metadata';
import { PersonObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/person.object-metadata';
import { WorkspaceMemberObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/workspace-member.object-metadata';

@ObjectMetadata({
  namePlural: 'companies',
  labelSingular: 'Company',
  labelPlural: 'Companies',
  description: 'A company',
  icon: 'IconBuildingSkyscraper',
})
export class CompanyObjectMetadata extends BaseObjectMetadata {
  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Name',
    description: 'The company name',
    icon: 'IconBuildingSkyscraper',
  })
  name: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Current Rate',
    description: 'Current rate medical_plan ee_group',
    icon: 'IconBuildingSkyscraper',
  })
  current_rate: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Domain Name',
    description:
      'The company website URL. We use this url to fetch the company icon',
    icon: 'IconLink',
  })
  @IsNullable()
  domainName?: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Address',
    description: 'The company address',
    icon: 'IconMap',
  })
  @IsNullable()
  address: string;

  @FieldMetadata({
    type: FieldMetadataType.NUMBER,
    label: 'Employees',
    description: 'Number of employees in the company',
    icon: 'IconUsers',
  })
  @IsNullable()
  employees: number;

  @FieldMetadata({
    type: FieldMetadataType.LINK,
    label: 'Linkedin',
    description: 'The company Linkedin account',
    icon: 'IconBrandLinkedin',
  })
  @IsNullable()
  linkedinLink: LinkMetadata;

  @FieldMetadata({
    type: FieldMetadataType.LINK,
    label: 'X',
    description: 'The company Twitter/X account',
    icon: 'IconBrandX',
  })
  @IsNullable()
  xLink: LinkMetadata;

  @FieldMetadata({
    type: FieldMetadataType.CURRENCY,
    label: 'ARR',
    description:
      'Annual Recurring Revenue: The actual or estimated annual revenue of the company',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  annualRecurringRevenue: CurrencyMetadata;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Related Accounts',
    description: 'Related Accounts',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  relatedAccounts: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Owner',
    description: 'Owner',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  Owner: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Control Group',
    description: 'Control Group',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  controlGroup: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Main Number',
    description: 'Main Number',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  mainNumber: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Contact Name',
    description: 'Contact Name',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  contactName: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Email',
    description: 'Email',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  email: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Fax Number',
    description: 'Fax Number',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  faxNumber: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Years in Business',
    description: 'Years in Business',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  yearsInBusiness: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Renewal Date',
    description: 'Renewal Date',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  renewalDate: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Grandfathered',
    description: 'Grandfathered',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  grandfathered: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Employee Count',
    description: 'Employee Count',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  employeeCount: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Cobra Eligible',
    description: 'Cobra Eligible',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  cobraEligible: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'State Continuation Eligible',
    description: 'State Continuation Eligible',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  stateContinuationEligible: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Waiting Period',
    description: 'Waiting Period',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  waitingPeriod: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Tax ID',
    description: 'Tax ID',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  taxid: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'SIC',
    description: 'SIC',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  sic: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Payroll Period',
    description: 'Payroll Period',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  payrollPeriod: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Employer Contribution',
    description: 'Employer Contribution',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  employerContribution: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'POP / Section 125',
    description: 'POP / Section 125',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  popsection125: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'General Agent',
    description: 'General Agent',
    icon: 'IconMoneybag',
  })
  @IsNullable()
  generalAgent: string;

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

  @FieldMetadata({
    type: FieldMetadataType.BOOLEAN,
    label: 'ICP',
    description:
      'Ideal Customer Profile:  Indicates whether the company is the most suitable and valuable customer for you',
    icon: 'IconTarget',
    defaultValue: { value: false },
  })
  idealCustomerProfile: boolean;

  // Relations
  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'People',
    description: 'People linked to the company.',
    icon: 'IconUsers',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_MANY,
    objectName: 'person',
  })
  @IsNullable()
  people: PersonObjectMetadata[];

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Account Owner',
    description:
      'Your team member responsible for managing the company account',
    icon: 'IconUserCircle',
    joinColumn: 'accountOwnerId',
  })
  @IsNullable()
  accountOwner: WorkspaceMemberObjectMetadata;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Activities',
    description: 'Activities tied to the company',
    icon: 'IconCheckbox',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_MANY,
    objectName: 'activityTarget',
  })
  @IsNullable()
  activityTargets: ActivityTargetObjectMetadata[];

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Opportunities',
    description: 'Opportunities linked to the company.',
    icon: 'IconTargetArrow',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_MANY,
    objectName: 'opportunity',
  })
  @IsNullable()
  opportunities: OpportunityObjectMetadata[];

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Favorites',
    description: 'Favorites linked to the company',
    icon: 'IconHeart',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_MANY,
    objectName: 'favorite',
  })
  @IsNullable()
  favorites: FavoriteObjectMetadata[];

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Attachments',
    description: 'Attachments linked to the company.',
    icon: 'IconFileImport',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_MANY,
    objectName: 'attachment',
  })
  @IsNullable()
  attachments: AttachmentObjectMetadata[];
}
