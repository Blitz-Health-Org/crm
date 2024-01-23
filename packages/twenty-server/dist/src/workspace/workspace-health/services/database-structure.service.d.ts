import { WorkspaceTableStructure } from 'src/workspace/workspace-health/interfaces/workspace-table-definition.interface';
import { FieldMetadataDefaultValue } from 'src/metadata/field-metadata/interfaces/field-metadata-default-value.interface';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
export declare class DatabaseStructureService {
    private readonly typeORMService;
    constructor(typeORMService: TypeORMService);
    getWorkspaceTableColumns(schemaName: string, tableName: string): Promise<WorkspaceTableStructure[]>;
    getPostgresDataType(fieldMetadataType: FieldMetadataType, fieldMetadataName: string, objectMetadataNameSingular: string): string;
    getPostgresDefault(fieldMetadataType: FieldMetadataType, defaultValue: FieldMetadataDefaultValue | null): string | null | undefined;
}
