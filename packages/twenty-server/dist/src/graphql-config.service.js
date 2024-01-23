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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLConfigService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("graphql");
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const jsonwebtoken_1 = require("jsonwebtoken");
const graphql_yoga_1 = require("graphql-yoga");
const token_service_1 = require("./core/auth/services/token.service");
const core_module_1 = require("./core/core.module");
const workspace_factory_1 = require("./workspace/workspace.factory");
const exception_handler_service_1 = require("./integrations/exception-handler/exception-handler.service");
const global_exception_handler_util_1 = require("./filters/utils/global-exception-handler.util");
const render_apollo_playground_util_1 = require("./workspace/utils/render-apollo-playground.util");
const environment_service_1 = require("./integrations/environment/environment.service");
let GraphQLConfigService = class GraphQLConfigService {
    constructor(tokenService, exceptionHandlerService, environmentService, moduleRef) {
        this.tokenService = tokenService;
        this.exceptionHandlerService = exceptionHandlerService;
        this.environmentService = environmentService;
        this.moduleRef = moduleRef;
    }
    createGqlOptions() {
        const exceptionHandlerService = this.exceptionHandlerService;
        const isDebugMode = this.environmentService.isDebugMode();
        const config = {
            context: ({ req }) => ({ req }),
            autoSchemaFile: true,
            include: [core_module_1.CoreModule],
            maskedErrors: {
                maskError(error, message, isDev) {
                    if (error.originalError) {
                        return (0, global_exception_handler_util_1.handleExceptionAndConvertToGraphQLError)(error.originalError, exceptionHandlerService);
                    }
                    return (0, graphql_yoga_1.maskError)(error, message, isDev);
                },
            },
            conditionalSchema: async (context) => {
                try {
                    let workspace;
                    try {
                        workspace = await this.tokenService.validateToken(context.req);
                    }
                    catch (err) {
                        return new graphql_1.GraphQLSchema({});
                    }
                    return await this.createSchema(context, workspace);
                }
                catch (error) {
                    if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
                        throw new graphql_1.GraphQLError('Unauthenticated', {
                            extensions: {
                                code: 'UNAUTHENTICATED',
                            },
                        });
                    }
                    if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                        throw new graphql_1.GraphQLError('Unauthenticated', {
                            extensions: {
                                code: 'UNAUTHENTICATED',
                            },
                        });
                    }
                    throw (0, global_exception_handler_util_1.handleExceptionAndConvertToGraphQLError)(error, this.exceptionHandlerService);
                }
            },
            resolvers: { JSON: graphql_type_json_1.default },
            plugins: [],
        };
        if (isDebugMode) {
            config.renderGraphiQL = () => {
                return (0, render_apollo_playground_util_1.renderApolloPlayground)();
            };
        }
        return config;
    }
    async createSchema(context, workspace) {
        const contextId = core_1.ContextIdFactory.create();
        this.moduleRef.registerRequestByContextId(context.req, contextId);
        const workspaceFactory = await this.moduleRef.resolve(workspace_factory_1.WorkspaceFactory, contextId, {
            strict: false,
        });
        return await workspaceFactory.createGraphQLSchema(workspace.id);
    }
};
exports.GraphQLConfigService = GraphQLConfigService;
exports.GraphQLConfigService = GraphQLConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        exception_handler_service_1.ExceptionHandlerService,
        environment_service_1.EnvironmentService,
        core_1.ModuleRef])
], GraphQLConfigService);
//# sourceMappingURL=graphql-config.service.js.map