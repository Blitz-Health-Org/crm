import { FieldMetadataDTO } from 'src/metadata/field-metadata/dtos/field-metadata.dto';
declare const UpdateFieldInput_base: import("@nestjs/common").Type<Omit<Partial<FieldMetadataDTO<"default" | import("../field-metadata.entity").FieldMetadataType>>, "id" | "createdAt" | "type" | "updatedAt">>;
export declare class UpdateFieldInput extends UpdateFieldInput_base {
    id: string;
    workspaceId: string;
}
export declare class UpdateOneFieldMetadataInput {
    id: string;
    update: UpdateFieldInput;
}
export {};
