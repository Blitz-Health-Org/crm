"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const logoStyle = {
    marginBottom: '40px',
};
const Logo = () => {
    return ((0, jsx_runtime_1.jsx)(components_1.Img, { src: "https://app.twenty.com/icons/windows11/Square150x150Logo.scale-100.png", alt: "Twenty logo", width: "40", height: "40", style: logoStyle }));
};
exports.Logo = Logo;
//# sourceMappingURL=Logo.js.map