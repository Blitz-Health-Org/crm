"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseSchema = void 0;
const path_utils_1 = require("./path.utils");
const baseSchema = () => {
    return {
        openapi: '3.0.3',
        info: {
            title: 'Twenty Api',
            description: `This is a **Twenty REST/API** playground based on the **OpenAPI 3.0 specification**.`,
            termsOfService: 'https://github.com/twentyhq/twenty?tab=coc-ov-file',
            contact: {
                email: 'felix@twenty.com',
            },
            license: {
                name: 'AGPL-3.0',
                url: 'https://github.com/twentyhq/twenty?tab=AGPL-3.0-1-ov-file#readme',
            },
            version: '0.2.0',
        },
        servers: [
            {
                url: 'https://api.twenty.com/',
                description: 'Production Development',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: 'Enter the token with the `Bearer: ` prefix, e.g. "Bearer abcde12345".',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
        externalDocs: {
            description: 'Find out more about **Twenty**',
            url: 'https://twenty.com',
        },
        paths: { '/open-api': (0, path_utils_1.computeOpenApiPath)() },
    };
};
exports.baseSchema = baseSchema;
//# sourceMappingURL=base-schema.utils.js.map