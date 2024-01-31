import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { FieldMetadata } from 'src/workspace/workspace-sync-metadata/decorators/field-metadata.decorator';
import { ObjectMetadata } from 'src/workspace/workspace-sync-metadata/decorators/object-metadata.decorator';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { CompanyObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/company.object-metadata';
import { RelationMetadata } from 'src/workspace/workspace-sync-metadata/decorators/relation-metadata.decorator';
import { RelationMetadataType } from 'src/metadata/relation-metadata/relation-metadata.entity';
import { MedicalPlanObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/medical-plan.object-metadata';
import { DentalPlanObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/dental-plan.object-metadata';
import { IsNullable } from 'src/workspace/workspace-sync-metadata/decorators/is-nullable.decorator';
import { VisionPlanObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/vision-plan.object-metadata';

@ObjectMetadata({
  namePlural: 'commissions',
  labelSingular: 'Commission Line',
  labelPlural: 'Commission Lines',
  description: 'Lines of Commission ',
  icon: 'IconMessageCircle', //TODO BLUME: fix all icons, figure out how they're referenced later on
})
export class CommissionLineObjectMetadata extends BaseObjectMetadata {
  //TODO BLUME: Make the fieldmetadatatype not just text,more specific, ie. FieldMetadata.DATE_TIME
  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Renewal Date',
    description: 'Comment body',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  renewalDate: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'AOR Date',
    description: 'Date for Agent of Record',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  aor: string;

  @FieldMetadata({
    //TODO BLUME: Make this a relation, not just text
    type: FieldMetadataType.TEXT,
    label: 'Carrier',
    description: 'Carrier',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  carrier: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Commission Rate',
    description: 'Commission Rate',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  commisionRate: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Monthly Invoice Estimate',
    description: 'Monthly Invoice Estimate',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  monthlyInvoiceEstimate: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Estimated Annual Commission',
    description: 'Estimated Annual Commission',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  estimatedAnnualCommission: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'no. Eligible Employees',
    description: 'Number of Eligible Employees',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  ee: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'no. Enrolled Employees',
    description: 'Number of Enrolled Employees',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  enrolledEmployees: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'January',
    description: 'Payment for January',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  jan: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'February',
    description: 'Payment for January',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  feb: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'March',
    description: 'Payment for January',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  mar: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'April',
    description: 'Payment for January',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  apr: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'May',
    description: 'Payment for January',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  may: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'June',
    description: 'Payment for January',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  jun: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'July',
    description: 'Payment for January',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  jul: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'August',
    description: 'Payment for January',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  aug: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'September',
    description: 'Payment for January',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  sep: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'October',
    description: 'Payment for January',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  oct: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'November',
    description: 'Payment for January',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  nov: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'December',
    description: 'Payment for January',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  dec: string;

  //Relations
  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'LOC',
    description: 'Line of Coverage',
    icon: 'IconLink',
    joinColumn: 'medicalPlanId',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_ONE,
    objectName: 'medicalPlan', //pick one of medicalPlan, dentalPlan, visionPlan,
    //TODO BLUME: Extend this to all medical plans
  })
  @IsNullable()
  medicalPlan: MedicalPlanObjectMetadata;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'LOC',
    description: 'Line of Coverage',
    icon: 'IconLink',
    joinColumn: 'dentalPlanId',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_ONE,
    objectName: 'dentalPlan', //pick one of medicalPlan, dentalPlan, visionPlan,
    //TODO BLUME: Extend this to all medical plans
  })
  @IsNullable()
  dentalPlan: DentalPlanObjectMetadata;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'LOC',
    description: 'Line of Coverage',
    icon: 'IconLink',
    joinColumn: 'visionPlanId',
  })
  @RelationMetadata({
    type: RelationMetadataType.ONE_TO_ONE,
    objectName: 'visionPlan', //pick one of medicalPlan, dentalPlan, visionPlan,
    //TODO BLUME: Extend this to all medical plans
  })
  @IsNullable()
  visionPlan: VisionPlanObjectMetadata;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Client',
    description: 'Client for line of commission',
    icon: 'IconBuildingSkyscraper',
    joinColumn: 'companyId',
  })
  @IsNullable()
  company: CompanyObjectMetadata;
}
