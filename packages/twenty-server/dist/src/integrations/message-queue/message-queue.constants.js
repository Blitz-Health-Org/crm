"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageQueue = exports.QUEUE_DRIVER = void 0;
exports.QUEUE_DRIVER = Symbol('QUEUE_DRIVER');
var MessageQueue;
(function (MessageQueue) {
    MessageQueue["taskAssignedQueue"] = "task-assigned-queue";
    MessageQueue["messagingQueue"] = "messaging-queue";
    MessageQueue["webhookQueue"] = "webhook-queue";
    MessageQueue["cronQueue"] = "cron-queue";
    MessageQueue["emailQueue"] = "email-queue";
})(MessageQueue || (exports.MessageQueue = MessageQueue = {}));
//# sourceMappingURL=message-queue.constants.js.map