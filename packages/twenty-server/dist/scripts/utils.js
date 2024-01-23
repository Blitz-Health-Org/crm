"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performQuery = exports.camelToSnakeCase = exports.connectionSource = void 0;
const config_1 = require("@nestjs/config");
const console_1 = __importDefault(require("console"));
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.connectionSource = new typeorm_1.DataSource({
    type: 'postgres',
    logging: false,
    url: configService.get('PG_DATABASE_URL'),
});
const camelToSnakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
exports.camelToSnakeCase = camelToSnakeCase;
const performQuery = async (query, consoleDescription, withLog = true, ignoreAlreadyExistsError = false) => {
    try {
        const result = await exports.connectionSource.query(query);
        withLog && console_1.default.log(`Performed '${consoleDescription}' successfully`);
        return result;
    }
    catch (err) {
        let message = '';
        if (ignoreAlreadyExistsError && `${err}`.includes('already exists')) {
            message = `Performed '${consoleDescription}' successfully`;
        }
        else {
            message = `Failed to perform '${consoleDescription}': ${err}`;
        }
        withLog && console_1.default.error(message);
    }
};
exports.performQuery = performQuery;
//# sourceMappingURL=utils.js.map