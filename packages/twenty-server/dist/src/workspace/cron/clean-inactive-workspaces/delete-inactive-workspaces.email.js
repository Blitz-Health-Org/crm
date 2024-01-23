"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInactiveWorkspaceEmail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const HighlightedText_1 = require("../../../emails/components/HighlightedText");
const MainText_1 = require("../../../emails/components/MainText");
const Title_1 = require("../../../emails/components/Title");
const BaseEmail_1 = require("../../../emails/components/BaseEmail");
const CallToAction_1 = require("../../../emails/components/CallToAction");
const DeleteInactiveWorkspaceEmail = ({ daysSinceDead, workspaceId, }) => {
    return ((0, jsx_runtime_1.jsxs)(BaseEmail_1.BaseEmail, { children: [(0, jsx_runtime_1.jsx)(Title_1.Title, { value: "Dead Workspace \uD83D\uDE35" }), (0, jsx_runtime_1.jsx)(HighlightedText_1.HighlightedText, { value: `Inactive since ${daysSinceDead} day(s)` }), (0, jsx_runtime_1.jsxs)(MainText_1.MainText, { children: ["Workspace ", (0, jsx_runtime_1.jsx)("b", { children: workspaceId }), " should be deleted."] }), (0, jsx_runtime_1.jsx)(CallToAction_1.CallToAction, { href: "https://app.twenty.com", value: "Connect to Twenty" })] }));
};
exports.DeleteInactiveWorkspaceEmail = DeleteInactiveWorkspaceEmail;
exports.default = exports.DeleteInactiveWorkspaceEmail;
//# sourceMappingURL=delete-inactive-workspaces.email.js.map