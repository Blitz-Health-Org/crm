import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
export declare const getRequestBody: (item: ObjectMetadataEntity) => {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: {
                $ref: string;
            };
        };
    };
};
