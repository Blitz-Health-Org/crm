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
exports.FileUploadResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const graphql_upload_1 = require("graphql-upload");
const file_folder_interface_1 = require("../interfaces/file-folder.interface");
const file_upload_service_1 = require("../services/file-upload.service");
const jwt_auth_guard_1 = require("../../../guards/jwt.auth.guard");
const stream_to_buffer_1 = require("../../../utils/stream-to-buffer");
let FileUploadResolver = class FileUploadResolver {
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
    async uploadFile({ createReadStream, filename, mimetype }, fileFolder) {
        const stream = createReadStream();
        const buffer = await (0, stream_to_buffer_1.streamToBuffer)(stream);
        const { path } = await this.fileUploadService.uploadFile({
            file: buffer,
            filename,
            mimeType: mimetype,
            fileFolder,
        });
        return path;
    }
    async uploadImage({ createReadStream, filename, mimetype }, fileFolder) {
        const stream = createReadStream();
        const buffer = await (0, stream_to_buffer_1.streamToBuffer)(stream);
        const { paths } = await this.fileUploadService.uploadImage({
            file: buffer,
            filename,
            mimeType: mimetype,
            fileFolder,
        });
        return paths[0];
    }
};
exports.FileUploadResolver = FileUploadResolver;
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)({ name: 'file', type: () => graphql_upload_1.GraphQLUpload })),
    __param(1, (0, graphql_1.Args)('fileFolder', { type: () => file_folder_interface_1.FileFolder, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FileUploadResolver.prototype, "uploadFile", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)({ name: 'file', type: () => graphql_upload_1.GraphQLUpload })),
    __param(1, (0, graphql_1.Args)('fileFolder', { type: () => file_folder_interface_1.FileFolder, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FileUploadResolver.prototype, "uploadImage", null);
exports.FileUploadResolver = FileUploadResolver = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [file_upload_service_1.FileUploadService])
], FileUploadResolver);
//# sourceMappingURL=file-upload.resolver.js.map