"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseHead = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const common_style_1 = require("../common-style");
const BaseHead = () => {
    return ((0, jsx_runtime_1.jsxs)(components_1.Head, { children: [(0, jsx_runtime_1.jsx)("title", { children: "Twenty email" }), (0, jsx_runtime_1.jsx)(components_1.Font, { fontFamily: "Inter", fallbackFontFamily: "sans-serif", webFont: {
                    url: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
                    format: 'woff2',
                }, fontStyle: "normal", fontWeight: common_style_1.emailTheme.font.weight.regular })] }));
};
exports.BaseHead = BaseHead;
//# sourceMappingURL=BaseHead.js.map