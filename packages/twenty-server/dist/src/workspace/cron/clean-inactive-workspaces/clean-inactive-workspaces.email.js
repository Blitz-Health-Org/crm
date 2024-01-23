"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CleanInactiveWorkspaceEmail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const HighlightedText_1 = require("../../../emails/components/HighlightedText");
const MainText_1 = require("../../../emails/components/MainText");
const Title_1 = require("../../../emails/components/Title");
const BaseEmail_1 = require("../../../emails/components/BaseEmail");
const CallToAction_1 = require("../../../emails/components/CallToAction");
const CleanInactiveWorkspaceEmail = ({ daysLeft, userName, workspaceDisplayName, }) => {
    const dayOrDays = daysLeft > 1 ? 'days' : 'day';
    const remainingDays = daysLeft > 1 ? `${daysLeft} ` : '';
    const helloString = (userName === null || userName === void 0 ? void 0 : userName.length) > 1 ? `Hello ${userName}` : 'Hello';
    return ((0, jsx_runtime_1.jsxs)(BaseEmail_1.BaseEmail, { children: [(0, jsx_runtime_1.jsx)(Title_1.Title, { value: "Inactive Workspace \uD83D\uDE34" }), (0, jsx_runtime_1.jsx)(HighlightedText_1.HighlightedText, { value: `${daysLeft} ${dayOrDays} left` }), (0, jsx_runtime_1.jsxs)(MainText_1.MainText, { children: [helloString, ",", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "It appears that there has been a period of inactivity on your", ' ', (0, jsx_runtime_1.jsx)("b", { children: workspaceDisplayName }), " workspace.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "Please note that the account is due for deactivation soon, and all associated data within this workspace will be deleted.", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "No need for concern, though! Simply create or edit a record within the next ", remainingDays, dayOrDays, " to retain access."] }), (0, jsx_runtime_1.jsx)(CallToAction_1.CallToAction, { href: "https://app.twenty.com", value: "Connect to Twenty" })] }));
};
exports.CleanInactiveWorkspaceEmail = CleanInactiveWorkspaceEmail;
exports.default = exports.CleanInactiveWorkspaceEmail;
//# sourceMappingURL=clean-inactive-workspaces.email.js.map