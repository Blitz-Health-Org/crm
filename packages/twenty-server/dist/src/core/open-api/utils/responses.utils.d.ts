import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
export declare const getManyResultResponse200: (item: ObjectMetadataEntity) => {
    description: string;
    content: {
        'application/json': {
            schema: {
                type: string;
                properties: {
                    data: {
                        type: string;
                        properties: {
                            [x: string]: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
                example: {
                    data: {
                        [x: string]: string[];
                    };
                };
            };
        };
    };
};
export declare const getSingleResultSuccessResponse: (item: ObjectMetadataEntity) => {
    description: string;
    content: {
        'application/json': {
            schema: {
                type: string;
                properties: {
                    data: {
                        type: string;
                        properties: {
                            [x: string]: {
                                $ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const getDeleteResponse200: (item: any) => {
    description: string;
    content: {
        'application/json': {
            schema: {
                type: string;
                properties: {
                    data: {
                        type: string;
                        properties: {
                            [x: number]: {
                                type: string;
                                properties: {
                                    id: {
                                        type: string;
                                        format: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const getJsonResponse: () => {
    description: string;
    content: {
        'application/json': {
            schema: {
                type: string;
            };
        };
    };
};
