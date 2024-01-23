"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGatedAndNotEnabled = void 0;
const isGatedAndNotEnabled = (metadata, workspaceFeatureFlagsMap) => {
    var _a, _b;
    const featureFlagValue = ((_a = metadata.gate) === null || _a === void 0 ? void 0 : _a.featureFlag) &&
        workspaceFeatureFlagsMap[metadata.gate.featureFlag];
    return ((_b = metadata.gate) === null || _b === void 0 ? void 0 : _b.featureFlag) !== undefined && !featureFlagValue;
};
exports.isGatedAndNotEnabled = isGatedAndNotEnabled;
//# sourceMappingURL=is-gate-and-not-enabled.util.js.map