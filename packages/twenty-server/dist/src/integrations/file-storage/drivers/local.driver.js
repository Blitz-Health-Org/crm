"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDriver = void 0;
const fs = __importStar(require("fs/promises"));
const fs_1 = require("fs");
const path_1 = require("path");
class LocalDriver {
    constructor(options) {
        this.options = options;
    }
    async createFolder(path) {
        if ((0, fs_1.existsSync)(path)) {
            return;
        }
        return fs.mkdir(path, { recursive: true });
    }
    async write(params) {
        const filePath = (0, path_1.join)(`${this.options.storagePath}/`, params.folder, params.name);
        const folderPath = (0, path_1.dirname)(filePath);
        await this.createFolder(folderPath);
        await fs.writeFile(filePath, params.file);
    }
    async read(params) {
        const filePath = (0, path_1.join)(`${this.options.storagePath}/`, params.folderPath, params.filename);
        return (0, fs_1.createReadStream)(filePath);
    }
}
exports.LocalDriver = LocalDriver;
//# sourceMappingURL=local.driver.js.map