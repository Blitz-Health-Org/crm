"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobClassName = void 0;
function getJobClassName(name) {
    var _a;
    const [, jobName] = (_a = name.split('.')) !== null && _a !== void 0 ? _a : [];
    return jobName !== null && jobName !== void 0 ? jobName : name;
}
exports.getJobClassName = getJobClassName;
//# sourceMappingURL=get-job-class-name.util.js.map