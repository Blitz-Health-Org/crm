"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const nestjs_query_typeorm_1 = require("@ptc-org/nestjs-query-typeorm");
const file_module_1 = require("../file/file.module");
const user_entity_1 = require("./user.entity");
const user_resolver_1 = require("./user.resolver");
const typeorm_service_1 = require("../../database/typeorm/typeorm.service");
const data_source_module_1 = require("../../metadata/data-source/data-source.module");
const typeorm_module_1 = require("../../database/typeorm/typeorm.module");
const user_auto_resolver_opts_1 = require("./user.auto-resolver-opts");
const user_service_1 = require("./services/user.service");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [
                    nestjs_query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([user_entity_1.User], 'core'),
                    typeorm_module_1.TypeORMModule,
                ],
                resolvers: user_auto_resolver_opts_1.userAutoResolverOpts,
            }),
            data_source_module_1.DataSourceModule,
            file_module_1.FileModule,
        ],
        exports: [user_service_1.UserService],
        providers: [user_service_1.UserService, user_resolver_1.UserResolver, typeorm_service_1.TypeORMService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map