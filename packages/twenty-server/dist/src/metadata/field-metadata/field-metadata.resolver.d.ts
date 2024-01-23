import { Workspace } from 'src/core/workspace/workspace.entity';
import { CreateOneFieldMetadataInput } from 'src/metadata/field-metadata/dtos/create-field.input';
import { UpdateOneFieldMetadataInput } from 'src/metadata/field-metadata/dtos/update-field.input';
import { FieldMetadataService } from 'src/metadata/field-metadata/field-metadata.service';
export declare class FieldMetadataResolver {
    private readonly fieldMetadataService;
    constructor(fieldMetadataService: FieldMetadataService);
    createOneField(input: CreateOneFieldMetadataInput, { id: workspaceId }: Workspace): Promise<import("./field-metadata.entity").FieldMetadataEntity<"default">>;
    updateOneField(input: UpdateOneFieldMetadataInput, { id: workspaceId }: Workspace): Promise<import("./field-metadata.entity").FieldMetadataEntity<"default">>;
}
