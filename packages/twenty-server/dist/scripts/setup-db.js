"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("console"));
const utils_1 = require("./utils");
utils_1.connectionSource
    .initialize()
    .then(async () => {
    await (0, utils_1.performQuery)('CREATE SCHEMA IF NOT EXISTS "public"', 'create schema "public"');
    await (0, utils_1.performQuery)('CREATE SCHEMA IF NOT EXISTS "metadata"', 'create schema "metadata"');
    await (0, utils_1.performQuery)('CREATE SCHEMA IF NOT EXISTS "core"', 'create schema "core"');
    await (0, utils_1.performQuery)('CREATE EXTENSION IF NOT EXISTS "pg_graphql"', 'create extension pg_graphql');
    await (0, utils_1.performQuery)('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"', 'create extension "uuid-ossp"');
    await (0, utils_1.performQuery)('CREATE EXTENSION IF NOT EXISTS "postgres_fdw"', 'create extension "postgres_fdw"');
    await (0, utils_1.performQuery)('CREATE EXTENSION IF NOT EXISTS "wrappers"', 'create extension "wrappers"');
    await (0, utils_1.performQuery)('CREATE EXTENSION IF NOT EXISTS "mysql_fdw"', 'create extension "mysql_fdw"');
    const supabaseWrappers = [
        'airtable',
        'bigQuery',
        'clickHouse',
        'firebase',
        'logflare',
        's3',
        'stripe',
    ];
    for (const wrapper of supabaseWrappers) {
        await (0, utils_1.performQuery)(`
          CREATE FOREIGN DATA WRAPPER "${wrapper.toLowerCase()}_fdw"
          HANDLER "${(0, utils_1.camelToSnakeCase)(wrapper)}_fdw_handler"
          VALIDATOR "${(0, utils_1.camelToSnakeCase)(wrapper)}_fdw_validator";
          `, `create ${wrapper} "wrappers"`, true, true);
    }
    await (0, utils_1.performQuery)(`COMMENT ON SCHEMA "core" IS '@graphql({"inflect_names": true})';`, 'inflect names for graphql');
    await (0, utils_1.performQuery)(`
      DROP FUNCTION IF EXISTS graphql;
      CREATE FUNCTION graphql(
        "operationName" text default null,
        query text default null,
        variables jsonb default null,
        extensions jsonb default null
      )
        returns jsonb
        language sql
        as $$
          select graphql.resolve(
              query := query,
              variables := coalesce(variables, '{}'),
              "operationName" := "operationName",
              extensions := extensions
          );
        $$;
    `, 'create function graphql');
})
    .catch((err) => {
    console_1.default.error('Error during Data Source initialization:', err);
});
//# sourceMappingURL=setup-db.js.map