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

@ObjectMetadata({
  namePlural: 'commissions',
  labelSingular: 'Commission Line',
  labelPlural: 'Commission Lines',
  description: 'Lines of Commission ',
  icon: 'IconMessageCircle', //TODO BLUME: fix all icons, figure out how they're referenced later on
})
export class CommissionLineObjectMetadata extends BaseObjectMetadata {
  @FieldMetadata({
    type: FieldMetadataType.TEXT, //change to relation at some point
    label: 'Client',
    description: 'Client served',
    icon: 'IconLink',
    joinColumn: 'companyId',
  })
  client: CompanyObjectMetadata;

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
  visionPlan: DentalPlanObjectMetadata;
}
