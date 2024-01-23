"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallToAction = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = require("@react-email/button");
const common_style_1 = require("../common-style");
const callToActionStyle = {
    display: 'flex',
    padding: '8px 32px',
    borderRadius: '8px',
    border: `1px solid ${common_style_1.emailTheme.background.transparent.light}`,
    background: common_style_1.emailTheme.background.radialGradient,
    boxShadow: `0px 2px 4px 0px ${common_style_1.emailTheme.background.transparent.light}, 0px 0px 4px 0px ${common_style_1.emailTheme.background.transparent.medium}`,
    color: common_style_1.emailTheme.font.colors.inverted,
    fontSize: common_style_1.emailTheme.font.size.md,
    fontWeight: common_style_1.emailTheme.font.weight.bold,
};
const CallToAction = ({ value, href }) => {
    return ((0, jsx_runtime_1.jsx)(button_1.Button, { href: href, style: callToActionStyle, children: value }));
};
exports.CallToAction = CallToAction;
//# sourceMappingURL=CallToAction.js.map