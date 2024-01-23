"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findManyCursorConnection = void 0;
const typeorm_1 = require("typeorm");
const validate_args_1 = require("./utils/validate-args");
const default_options_1 = require("./utils/default-options");
const pagination_direction_1 = require("./utils/pagination-direction");
const cursor_1 = require("./utils/cursor");
async function findManyCursorConnection(query, args = {}, initialOptions) {
    if (!(0, validate_args_1.validateArgs)(args)) {
        throw new Error('Should never happen');
    }
    const options = (0, default_options_1.mergeDefaultOptions)(initialOptions);
    const totalCountQuery = query.clone();
    const totalCount = await totalCountQuery.getCount();
    const cursorKeys = Object.keys(options.getCursor(undefined));
    let records;
    let hasNextPage;
    let hasPreviousPage;
    for (const key of cursorKeys) {
        query.addOrderBy(key, 'ASC');
    }
    if ((0, pagination_direction_1.isForwardPagination)(args)) {
        const take = args.first + 1;
        const cursorMap = (0, cursor_1.extractCursorKeyValue)(args.after, options);
        const skip = cursorMap ? 1 : undefined;
        if (cursorMap) {
            const [keys, values] = cursorMap;
            query.andWhere(keys.reduce((acc, key, index) => {
                return Object.assign(Object.assign({}, acc), { [key]: (0, typeorm_1.MoreThanOrEqual)(values[index]) });
            }, {}));
        }
        query.take(take).skip(skip);
        records = await options.getRecords(query);
        hasPreviousPage = !!args.after;
        hasNextPage = records.length > args.first;
        if (hasNextPage)
            records.pop();
    }
    else if ((0, pagination_direction_1.isBackwardPagination)(args)) {
        const take = -1 * (args.last + 1);
        const cursorMap = (0, cursor_1.extractCursorKeyValue)(args.before, options);
        const skip = cursorMap ? 1 : undefined;
        if (cursorMap) {
            const [keys, values] = cursorMap;
            query.andWhere(keys.reduce((acc, key, index) => {
                return Object.assign(Object.assign({}, acc), { [key]: (0, typeorm_1.LessThanOrEqual)(values[index]) });
            }, {}));
        }
        query.take(take).skip(skip);
        records = await options.getRecords(query);
        hasNextPage = !!args.before;
        hasPreviousPage = records.length > args.last;
        if (hasPreviousPage)
            records.shift();
    }
    else {
        records = await options.getRecords(query);
        hasNextPage = false;
        hasPreviousPage = false;
    }
    const startCursor = records.length > 0 ? (0, cursor_1.encodeCursor)(records[0], options) : undefined;
    const endCursor = records.length > 0
        ? (0, cursor_1.encodeCursor)(records[records.length - 1], options)
        : undefined;
    const edges = records.map((record) => {
        return Object.assign(Object.assign({}, options.recordToEdge(record)), { cursor: (0, cursor_1.encodeCursor)(record, options) });
    });
    return {
        edges,
        pageInfo: { hasNextPage, hasPreviousPage, startCursor, endCursor },
        totalCount,
    };
}
exports.findManyCursorConnection = findManyCursorConnection;
//# sourceMappingURL=find-many-cursor-connection.js.map