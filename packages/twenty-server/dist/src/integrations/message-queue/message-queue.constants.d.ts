export declare const QUEUE_DRIVER: unique symbol;
export declare enum MessageQueue {
    taskAssignedQueue = "task-assigned-queue",
    messagingQueue = "messaging-queue",
    webhookQueue = "webhook-queue",
    cronQueue = "cron-queue",
    emailQueue = "email-queue"
}
