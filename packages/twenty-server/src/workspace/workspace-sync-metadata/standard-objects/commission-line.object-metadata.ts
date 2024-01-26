import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import { FieldMetadata } from 'src/workspace/workspace-sync-metadata/decorators/field-metadata.decorator';
import { IsSystem } from 'src/workspace/workspace-sync-metadata/decorators/is-system.decorator';
import { ObjectMetadata } from 'src/workspace/workspace-sync-metadata/decorators/object-metadata.decorator';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { CompanyObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/company.object-metadata';

@ObjectMetadata({
  namePlural: 'commissionLines',
  labelSingular: 'Commisssion Line',
  labelPlural: 'Commission Lines',
  description: 'Lines of Commission ',
  icon: 'IconMessageCircle', //TODO BLUME: fix all icons, figure out how they're referenced later on
})
@IsSystem()
export class CommissionLineObjectMetadata extends BaseObjectMetadata {
  //TODO BLUME: Make the fieldmetadatatype not just text,more specific, ie. FieldMetadata.DATE_TIME
  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Renewal Date',
    description: 'Comment body',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  body: string;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Client',
    description: 'Client served',
    icon: 'IconLink',
    joinColumn: 'companyId',
  })
  client: CompanyObjectMetadata;

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
    label: 'LOC',
    description: 'Line of Coverage',
    icon: 'IconLink',
    defaultValue: { value: '' },
  })
  loc: string;

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
}
