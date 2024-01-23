"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEmail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const BaseHead_1 = require("./BaseHead");
const Logo_1 = require("./Logo");
const BaseEmail = ({ children }) => {
    return ((0, jsx_runtime_1.jsxs)(components_1.Html, { lang: "en", children: [(0, jsx_runtime_1.jsx)(BaseHead_1.BaseHead, {}), (0, jsx_runtime_1.jsxs)(components_1.Container, { width: 290, children: [(0, jsx_runtime_1.jsx)(Logo_1.Logo, {}), children] })] }));
};
exports.BaseEmail = BaseEmail;
//# sourceMappingURL=BaseEmail.js.map