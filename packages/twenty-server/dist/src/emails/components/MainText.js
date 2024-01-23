"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const text_1 = require("@react-email/text");
const common_style_1 = require("../common-style");
const mainTextStyle = {
    fontSize: common_style_1.emailTheme.font.size.md,
    fontWeight: common_style_1.emailTheme.font.weight.regular,
    color: common_style_1.emailTheme.font.colors.primary,
};
const MainText = ({ children }) => {
    return (0, jsx_runtime_1.jsx)(text_1.Text, { style: mainTextStyle, children: children });
};
exports.MainText = MainText;
//# sourceMappingURL=MainText.js.map