"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFilename = exports.checkFilePath = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const kebab_case_1 = require("../../utils/kebab-case");
const settings_1 = require("../../constants/settings");
const file_folder_interface_1 = require("./interfaces/file-folder.interface");
const checkFilePath = (filePath) => {
    var _a;
    const allowedFolders = Object.values(file_folder_interface_1.FileFolder).map((value) => (0, kebab_case_1.kebabCase)(value));
    const sanitizedFilePath = filePath.replace(/\0/g, '');
    const [folder, size] = sanitizedFilePath.split('/');
    if (!allowedFolders.includes(folder)) {
        throw new common_1.BadRequestException(`Folder ${folder} is not allowed`);
    }
    if (size && !((_a = settings_1.settings.storage.imageCropSizes[folder]) === null || _a === void 0 ? void 0 : _a.includes(size))) {
        throw new common_1.BadRequestException(`Size ${size} is not allowed`);
    }
    return sanitizedFilePath;
};
exports.checkFilePath = checkFilePath;
const checkFilename = (filename) => {
    const sanitizedFilename = (0, path_1.basename)(filename.replace(/\0/g, ''));
    if (!sanitizedFilename ||
        sanitizedFilename.includes('/') ||
        sanitizedFilename.includes('\\') ||
        !sanitizedFilename.includes('.')) {
        throw new common_1.BadRequestException(`Filename is not allowed`);
    }
    return (0, path_1.basename)(sanitizedFilename);
};
exports.checkFilename = checkFilename;
//# sourceMappingURL=file.utils.js.map