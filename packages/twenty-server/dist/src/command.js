"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nest_commander_1 = require("nest-commander");
const command_module_1 = require("./command.module");
async function bootstrap() {
    await nest_commander_1.CommandFactory.run(command_module_1.CommandModule, ['warn', 'error', 'log']);
}
bootstrap();
//# sourceMappingURL=command.js.map