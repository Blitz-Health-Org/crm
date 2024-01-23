export type DateScalarMode = 'isoDate' | 'timestamp';
export type NumberScalarMode = 'float' | 'integer';
export interface WorkspaceBuildSchemaOptions {
    dateScalarMode?: DateScalarMode;
    numberScalarMode?: NumberScalarMode;
}
