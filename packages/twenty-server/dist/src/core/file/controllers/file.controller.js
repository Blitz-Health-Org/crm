"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const file_utils_1 = require("../file.utils");
const file_service_1 = require("../services/file.service");
let FileController = class FileController {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async getFile(params, res) {
        const folderPath = (0, file_utils_1.checkFilePath)(params[0]);
        const filename = (0, file_utils_1.checkFilename)(params['filename']);
        const fileStream = await this.fileService.getFileStream(folderPath, filename);
        fileStream.on('error', () => {
            res.status(404).send({ error: 'File not found' });
        });
        fileStream.pipe(res);
    }
};
exports.FileController = FileController;
__decorate([
    (0, common_1.Get)('*/:filename'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "getFile", null);
exports.FileController = FileController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [file_service_1.FileService])
], FileController);
//# sourceMappingURL=file.controller.js.map