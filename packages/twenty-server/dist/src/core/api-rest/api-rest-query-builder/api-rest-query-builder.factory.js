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
exports.ApiRestQueryBuilderFactory = void 0;
const common_1 = require("@nestjs/common");
const delete_query_factory_1 = require("./factories/delete-query.factory");
const object_metadata_service_1 = require("../../../metadata/object-metadata/object-metadata.service");
const token_service_1 = require("../../auth/services/token.service");
const create_query_factory_1 = require("./factories/create-query.factory");
const update_query_factory_1 = require("./factories/update-query.factory");
const find_one_query_factory_1 = require("./factories/find-one-query.factory");
const find_many_query_factory_1 = require("./factories/find-many-query.factory");
const delete_variables_factory_1 = require("./factories/delete-variables.factory");
const create_variables_factory_1 = require("./factories/create-variables.factory");
const update_variables_factory_1 = require("./factories/update-variables.factory");
const get_variables_factory_1 = require("./factories/get-variables.factory");
const parse_path_utils_1 = require("./utils/parse-path.utils");
const compute_depth_utils_1 = require("./utils/compute-depth.utils");
const environment_service_1 = require("../../../integrations/environment/environment.service");
let ApiRestQueryBuilderFactory = class ApiRestQueryBuilderFactory {
    constructor(deleteQueryFactory, createQueryFactory, updateQueryFactory, findOneQueryFactory, findManyQueryFactory, deleteVariablesFactory, createVariablesFactory, updateVariablesFactory, getVariablesFactory, objectMetadataService, tokenService, environmentService) {
        this.deleteQueryFactory = deleteQueryFactory;
        this.createQueryFactory = createQueryFactory;
        this.updateQueryFactory = updateQueryFactory;
        this.findOneQueryFactory = findOneQueryFactory;
        this.findManyQueryFactory = findManyQueryFactory;
        this.deleteVariablesFactory = deleteVariablesFactory;
        this.createVariablesFactory = createVariablesFactory;
        this.updateVariablesFactory = updateVariablesFactory;
        this.getVariablesFactory = getVariablesFactory;
        this.objectMetadataService = objectMetadataService;
        this.tokenService = tokenService;
        this.environmentService = environmentService;
    }
    async getObjectMetadata(request) {
        const workspace = await this.tokenService.validateToken(request);
        const objectMetadataItems = await this.objectMetadataService.findManyWithinWorkspace(workspace.id);
        if (!objectMetadataItems.length) {
            throw new common_1.BadRequestException(`No object was found for the workspace associated with this API key. You may generate a new one here ${this.environmentService.getFrontBaseUrl()}/settings/developers/api-keys`);
        }
        const { object: parsedObject } = (0, parse_path_utils_1.parsePath)(request);
        const [objectMetadata] = objectMetadataItems.filter((object) => object.namePlural === parsedObject);
        if (!objectMetadata) {
            const [wrongObjectMetadata] = objectMetadataItems.filter((object) => object.nameSingular === parsedObject);
            let hint = 'eg: companies';
            if (wrongObjectMetadata) {
                hint = `Did you mean '${wrongObjectMetadata.namePlural}'?`;
            }
            throw new common_1.BadRequestException(`object '${parsedObject}' not found. ${hint}`);
        }
        return {
            objectMetadataItems,
            objectMetadataItem: objectMetadata,
        };
    }
    async delete(request) {
        const objectMetadata = await this.getObjectMetadata(request);
        const { id } = (0, parse_path_utils_1.parsePath)(request);
        if (!id) {
            throw new common_1.BadRequestException(`delete ${objectMetadata.objectMetadataItem.nameSingular} query invalid. Id missing. eg: /rest/${objectMetadata.objectMetadataItem.namePlural}/0d4389ef-ea9c-4ae8-ada1-1cddc440fb56`);
        }
        return {
            query: this.deleteQueryFactory.create(objectMetadata.objectMetadataItem),
            variables: this.deleteVariablesFactory.create(id),
        };
    }
    async create(request) {
        const objectMetadata = await this.getObjectMetadata(request);
        const depth = (0, compute_depth_utils_1.computeDepth)(request);
        return {
            query: this.createQueryFactory.create(objectMetadata, depth),
            variables: this.createVariablesFactory.create(request),
        };
    }
    async update(request) {
        const objectMetadata = await this.getObjectMetadata(request);
        const depth = (0, compute_depth_utils_1.computeDepth)(request);
        const { id } = (0, parse_path_utils_1.parsePath)(request);
        if (!id) {
            throw new common_1.BadRequestException(`update ${objectMetadata.objectMetadataItem.nameSingular} query invalid. Id missing. eg: /rest/${objectMetadata.objectMetadataItem.namePlural}/0d4389ef-ea9c-4ae8-ada1-1cddc440fb56`);
        }
        return {
            query: this.updateQueryFactory.create(objectMetadata, depth),
            variables: this.updateVariablesFactory.create(id, request),
        };
    }
    async get(request) {
        const objectMetadata = await this.getObjectMetadata(request);
        const depth = (0, compute_depth_utils_1.computeDepth)(request);
        const { id } = (0, parse_path_utils_1.parsePath)(request);
        return {
            query: id
                ? this.findOneQueryFactory.create(objectMetadata, depth)
                : this.findManyQueryFactory.create(objectMetadata, depth),
            variables: this.getVariablesFactory.create(id, request, objectMetadata),
        };
    }
};
exports.ApiRestQueryBuilderFactory = ApiRestQueryBuilderFactory;
exports.ApiRestQueryBuilderFactory = ApiRestQueryBuilderFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [delete_query_factory_1.DeleteQueryFactory,
        create_query_factory_1.CreateQueryFactory,
        update_query_factory_1.UpdateQueryFactory,
        find_one_query_factory_1.FindOneQueryFactory,
        find_many_query_factory_1.FindManyQueryFactory,
        delete_variables_factory_1.DeleteVariablesFactory,
        create_variables_factory_1.CreateVariablesFactory,
        update_variables_factory_1.UpdateVariablesFactory,
        get_variables_factory_1.GetVariablesFactory,
        object_metadata_service_1.ObjectMetadataService,
        token_service_1.TokenService,
        environment_service_1.EnvironmentService])
], ApiRestQueryBuilderFactory);
//# sourceMappingURL=api-rest-query-builder.factory.js.map