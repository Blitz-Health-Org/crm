"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = exports.typeORMMetadataModuleOptions = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.typeORMMetadataModuleOptions = {
    url: configService.get('PG_DATABASE_URL'),
    type: 'postgres',
    logging: ['error'],
    schema: 'metadata',
    entities: ['dist/src/metadata/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: false,
    migrationsTableName: '_typeorm_migrations',
    migrations: ['dist/src/database/typeorm/metadata/migrations/*{.ts,.js}'],
};
exports.connectionSource = new typeorm_1.DataSource(exports.typeORMMetadataModuleOptions);
//# sourceMappingURL=metadata.datasource.js.map