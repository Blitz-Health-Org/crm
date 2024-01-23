import { FieldMetadataDTO } from 'src/metadata/field-metadata/dtos/field-metadata.dto';
declare const CreateFieldInput_base: import("@nestjs/common").Type<Omit<FieldMetadataDTO<"default" | import("../field-metadata.entity").FieldMetadataType>, "id" | "createdAt" | "updatedAt">>;
export declare class CreateFieldInput extends CreateFieldInput_base {
    objectMetadataId: string;
}
export declare class CreateOneFieldMetadataInput {
    field: CreateFieldInput;
}
export {};
