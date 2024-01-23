"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnActionAbstractFactory = void 0;
const common_1 = require("@nestjs/common");
const workspace_migration_entity_1 = require("../workspace-migration.entity");
class ColumnActionAbstractFactory {
    constructor() {
        this.logger = new common_1.Logger(ColumnActionAbstractFactory.name);
    }
    create(action, currentFieldMetadata, alteredFieldMetadata, options) {
        switch (action) {
            case workspace_migration_entity_1.WorkspaceMigrationColumnActionType.CREATE:
                return this.handleCreateAction(alteredFieldMetadata, options);
            case workspace_migration_entity_1.WorkspaceMigrationColumnActionType.ALTER: {
                if (!currentFieldMetadata) {
                    throw new Error('current field metadata is required for alter');
                }
                return this.handleAlterAction(currentFieldMetadata, alteredFieldMetadata, options);
            }
            default: {
                this.logger.error(`Invalid action: ${action}`);
                throw new Error('[AbstractFactory]: invalid action');
            }
        }
    }
    handleCreateAction(_fieldMetadata, _options) {
        throw new Error('handleCreateAction method not implemented.');
    }
    handleAlterAction(_currentFieldMetadata, _alteredFieldMetadata, _options) {
        throw new Error('handleAlterAction method not implemented.');
    }
}
exports.ColumnActionAbstractFactory = ColumnActionAbstractFactory;
//# sourceMappingURL=column-action-abstract.factory.js.map