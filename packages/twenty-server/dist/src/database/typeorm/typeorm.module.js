"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeORMModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const core_datasource_1 = require("./core/core.datasource");
const environment_module_1 = require("../../integrations/environment/environment.module");
const typeorm_service_1 = require("./typeorm.service");
const metadata_datasource_1 = require("./metadata/metadata.datasource");
const metadataTypeORMFactory = async () => (Object.assign(Object.assign({}, metadata_datasource_1.typeORMMetadataModuleOptions), { name: 'metadata' }));
const coreTypeORMFactory = async () => (Object.assign(Object.assign({}, core_datasource_1.typeORMCoreModuleOptions), { name: 'core' }));
let TypeORMModule = class TypeORMModule {
};
exports.TypeORMModule = TypeORMModule;
exports.TypeORMModule = TypeORMModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: metadataTypeORMFactory,
                name: 'metadata',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: coreTypeORMFactory,
                name: 'core',
            }),
            environment_module_1.EnvironmentModule,
        ],
        providers: [typeorm_service_1.TypeORMService],
        exports: [typeorm_service_1.TypeORMService],
    })
], TypeORMModule);
//# sourceMappingURL=typeorm.module.js.map