"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighlightedText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const row_1 = require("@react-email/row");
const text_1 = require("@react-email/text");
const components_1 = require("@react-email/components");
const common_style_1 = require("../common-style");
const rowStyle = {
    display: 'flex',
};
const highlightedStyle = {
    borderRadius: '4px',
    background: common_style_1.emailTheme.background.colors.highlight,
    padding: '4px 8px',
    margin: 0,
    fontSize: common_style_1.emailTheme.font.size.lg,
    fontWeight: common_style_1.emailTheme.font.weight.bold,
    color: common_style_1.emailTheme.font.colors.highlighted,
};
const HighlightedText = ({ value }) => {
    return ((0, jsx_runtime_1.jsx)(row_1.Row, { style: rowStyle, children: (0, jsx_runtime_1.jsx)(components_1.Column, { children: (0, jsx_runtime_1.jsx)(text_1.Text, { style: highlightedStyle, children: value }) }) }));
};
exports.HighlightedText = HighlightedText;
//# sourceMappingURL=HighlightedText.js.map