"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageQueueDriverType = void 0;
var MessageQueueDriverType;
(function (MessageQueueDriverType) {
    MessageQueueDriverType["PgBoss"] = "pg-boss";
    MessageQueueDriverType["BullMQ"] = "bull-mq";
    MessageQueueDriverType["Sync"] = "sync";
})(MessageQueueDriverType || (exports.MessageQueueDriverType = MessageQueueDriverType = {}));
//# sourceMappingURL=message-queue.interface.js.map