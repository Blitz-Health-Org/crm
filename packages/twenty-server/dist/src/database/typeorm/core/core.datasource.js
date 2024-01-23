"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = exports.typeORMCoreModuleOptions = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.typeORMCoreModuleOptions = {
    url: configService.get('PG_DATABASE_URL'),
    type: 'postgres',
    logging: ['error'],
    schema: 'core',
    entities: ['dist/src/core/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: false,
    migrationsTableName: '_typeorm_migrations',
    migrations: ['dist/src/database/typeorm/core/migrations/*{.ts,.js}'],
};
exports.connectionSource = new typeorm_1.DataSource(exports.typeORMCoreModuleOptions);
//# sourceMappingURL=core.datasource.js.map