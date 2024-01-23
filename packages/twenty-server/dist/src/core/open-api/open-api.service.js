"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiService = void 0;
const common_1 = require("@nestjs/common");
const token_service_1 = require("../auth/services/token.service");
const object_metadata_service_1 = require("../../metadata/object-metadata/object-metadata.service");
const base_schema_utils_1 = require("./utils/base-schema.utils");
const path_utils_1 = require("./utils/path.utils");
const get_error_responses_utils_1 = require("./utils/get-error-responses.utils");
const components_utils_1 = require("./utils/components.utils");
const compute_schema_tags_utils_1 = require("./utils/compute-schema-tags.utils");
let OpenApiService = class OpenApiService {
    constructor(tokenService, objectMetadataService) {
        this.tokenService = tokenService;
        this.objectMetadataService = objectMetadataService;
    }
    async generateSchema(request) {
        const schema = (0, base_schema_utils_1.baseSchema)();
        let objectMetadataItems;
        try {
            const workspace = await this.tokenService.validateToken(request);
            objectMetadataItems =
                await this.objectMetadataService.findManyWithinWorkspace(workspace.id);
        }
        catch (err) {
            return schema;
        }
        if (!objectMetadataItems.length) {
            return schema;
        }
        schema.paths = objectMetadataItems.reduce((paths, item) => {
            paths[`/rest/${item.namePlural}`] = (0, path_utils_1.computeManyResultPath)(item);
            paths[`/rest/${item.namePlural}/{id}`] = (0, path_utils_1.computeSingleResultPath)(item);
            return paths;
        }, schema.paths);
        schema.tags = (0, compute_schema_tags_utils_1.computeSchemaTags)(objectMetadataItems);
        schema.components = Object.assign(Object.assign({}, schema.components), { schemas: (0, components_utils_1.computeSchemaComponents)(objectMetadataItems), parameters: (0, components_utils_1.computeParameterComponents)(), responses: {
                '400': (0, get_error_responses_utils_1.getErrorResponses)('Invalid request'),
                '401': (0, get_error_responses_utils_1.getErrorResponses)('Unauthorized'),
            } });
        return schema;
    }
};
exports.OpenApiService = OpenApiService;
exports.OpenApiService = OpenApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        object_metadata_service_1.ObjectMetadataService])
], OpenApiService);
//# sourceMappingURL=open-api.service.js.map