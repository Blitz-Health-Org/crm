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
    await (0, utils_1.performQuery)(`
        CREATE OR REPLACE FUNCTION drop_all() RETURNS VOID AS $$
          DECLARE schema_item RECORD; 
          BEGIN
            FOR schema_item IN
              SELECT subrequest."name" as schema_name
              FROM  (SELECT n.nspname AS "name"
              FROM pg_catalog.pg_namespace n
              WHERE n.nspname !~ '^pg_' AND n.nspname <> 'information_schema') as subrequest
            LOOP
              EXECUTE 'DROP SCHEMA ' || schema_item.schema_name || ' CASCADE'; 
            END LOOP; 
            RETURN; 
          END;
        $$ LANGUAGE plpgsql;
     
        SELECT drop_all ();
      `, 'Dropping all schemas...');
})
    .catch((err) => {
    console_1.default.error('Error during Data Source initialization:', err);
});
//# sourceMappingURL=truncate-db.js.map