"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customTableDefaultColumns = void 0;
exports.customTableDefaultColumns = [
    {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        default: 'public.uuid_generate_v4()',
    },
    {
        name: 'createdAt',
        type: 'timestamp',
        default: 'now()',
    },
    {
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()',
    },
    {
        name: 'deletedAt',
        type: 'timestamp',
        isNullable: true,
    },
];
//# sourceMappingURL=custom-table-default-column.util.js.map