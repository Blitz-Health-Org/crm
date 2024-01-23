"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const bodyParser = __importStar(require("body-parser"));
const graphql_upload_1 = require("graphql-upload");
const bytes_1 = __importDefault(require("bytes"));
const class_validator_1 = require("class-validator");
const app_module_1 = require("./app.module");
const settings_1 = require("./constants/settings");
const logger_service_1 = require("./integrations/logger/logger.service");
const environment_service_1 = require("./integrations/environment/environment.service");
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
        logger: process.env.DEBUG_MODE
            ? ['error', 'warn', 'log', 'verbose', 'debug']
            : ['error', 'warn', 'log'],
    });
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.use(bodyParser.json({ limit: settings_1.settings.storage.maxFileSize }));
    app.use(bodyParser.urlencoded({
        limit: settings_1.settings.storage.maxFileSize,
        extended: true,
    }));
    app.use((0, graphql_upload_1.graphqlUploadExpress)({
        maxFieldSize: (0, bytes_1.default)(settings_1.settings.storage.maxFileSize),
        maxFiles: 10,
    }));
    const loggerService = app.get(logger_service_1.LoggerService);
    app.useLogger(loggerService);
    app.useLogger(app.get(environment_service_1.EnvironmentService).getLogLevels());
    await app.listen(app.get(environment_service_1.EnvironmentService).getPort());
};
bootstrap();
//# sourceMappingURL=main.js.map