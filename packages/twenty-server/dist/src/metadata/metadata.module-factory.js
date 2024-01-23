"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadataModuleFactory = void 0;
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const graphql_yoga_1 = require("graphql-yoga");
const global_exception_handler_util_1 = require("../filters/utils/global-exception-handler.util");
const metadata_module_1 = require("./metadata.module");
const render_apollo_playground_util_1 = require("../workspace/utils/render-apollo-playground.util");
const metadataModuleFactory = async (environmentService, exceptionHandlerService) => {
    const config = {
        context: ({ req }) => ({ req }),
        autoSchemaFile: true,
        include: [metadata_module_1.MetadataModule],
        renderGraphiQL() {
            return (0, render_apollo_playground_util_1.renderApolloPlayground)({ path: 'metadata' });
        },
        resolvers: { JSON: graphql_type_json_1.default },
        plugins: [],
        path: '/metadata',
        maskedErrors: {
            maskError(error, message, isDev) {
                if (error.originalError) {
                    return (0, global_exception_handler_util_1.handleExceptionAndConvertToGraphQLError)(error.originalError, exceptionHandlerService);
                }
                return (0, graphql_yoga_1.maskError)(error, message, isDev);
            },
        },
    };
    if (environmentService.isDebugMode()) {
        config.renderGraphiQL = () => {
            return (0, render_apollo_playground_util_1.renderApolloPlayground)({ path: 'metadata' });
        };
    }
    return config;
};
exports.metadataModuleFactory = metadataModuleFactory;
//# sourceMappingURL=metadata.module-factory.js.map