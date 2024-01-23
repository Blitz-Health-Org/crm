"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionHandlerConsoleDriver = void 0;
class ExceptionHandlerConsoleDriver {
    captureException(exception) {
        console.group('Exception Captured');
        console.error(exception);
        console.groupEnd();
    }
    captureMessage(message) {
        console.group('Message Captured');
        console.info(message);
        console.groupEnd();
    }
}
exports.ExceptionHandlerConsoleDriver = ExceptionHandlerConsoleDriver;
//# sourceMappingURL=console.driver.js.map