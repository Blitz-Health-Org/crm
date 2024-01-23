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
exports.WorkspaceAddTotalCountCommand = void 0;
const nest_commander_1 = require("nest-commander");
const chalk_1 = __importDefault(require("chalk"));
const typeorm_service_1 = require("../typeorm/typeorm.service");
let WorkspaceAddTotalCountCommand = class WorkspaceAddTotalCountCommand extends nest_commander_1.CommandRunner {
    constructor(typeORMService) {
        super();
        this.typeORMService = typeORMService;
    }
    async run() {
        const mainDataSource = this.typeORMService.getMainDataSource();
        try {
            await mainDataSource.query(`
        DO $$
        DECLARE
            schema_cursor CURSOR FOR SELECT schema_name FROM information_schema.schemata WHERE schema_name LIKE 'workspace_%';
            schema_name text;
            table_rec record;
        BEGIN
            OPEN schema_cursor;
            LOOP
                FETCH schema_cursor INTO schema_name;
                EXIT WHEN NOT FOUND;
                
                FOR table_rec IN SELECT t.table_name FROM information_schema.tables t WHERE t.table_schema = schema_name
                LOOP
                    EXECUTE 'COMMENT ON TABLE ' || quote_ident(schema_name) || '.' || quote_ident(table_rec.table_name) || ' IS e''@graphql({"totalCount": {"enabled": true}})'';';
                END LOOP;
            END LOOP;
            CLOSE schema_cursor;
        END $$;    
      `);
            console.log(chalk_1.default.green('Total count directive added to all workspace tables'));
        }
        catch (error) {
            console.log(chalk_1.default.red('Error adding total count directive to all workspace tables'));
        }
    }
};
exports.WorkspaceAddTotalCountCommand = WorkspaceAddTotalCountCommand;
exports.WorkspaceAddTotalCountCommand = WorkspaceAddTotalCountCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'workspace:add-total-count',
        description: 'Add pg_graphql total count directive to all workspace tables',
    }),
    __metadata("design:paramtypes", [typeorm_service_1.TypeORMService])
], WorkspaceAddTotalCountCommand);
//# sourceMappingURL=workspace-add-total-count.command.js.map