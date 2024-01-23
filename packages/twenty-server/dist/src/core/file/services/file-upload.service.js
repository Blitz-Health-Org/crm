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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
const sharp_1 = __importDefault(require("sharp"));
const uuid_1 = require("uuid");
const image_1 = require("../../../utils/image");
const settings_1 = require("../../../constants/settings");
const file_storage_service_1 = require("../../../integrations/file-storage/file-storage.service");
let FileUploadService = class FileUploadService {
    constructor(fileStorage) {
        this.fileStorage = fileStorage;
    }
    async _uploadFile({ file, filename, mimeType, fileFolder, }) {
        await this.fileStorage.write({
            file,
            name: filename,
            mimeType,
            folder: fileFolder,
        });
    }
    async uploadFile({ file, filename, mimeType, fileFolder, }) {
        var _a;
        const ext = (_a = filename.split('.')) === null || _a === void 0 ? void 0 : _a[1];
        const id = (0, uuid_1.v4)();
        const name = `${id}${ext ? `.${ext}` : ''}`;
        await this._uploadFile({
            file,
            filename: name,
            mimeType,
            fileFolder,
        });
        return {
            id,
            mimeType,
            path: `${fileFolder}/${name}`,
        };
    }
    async uploadImage({ file, filename, mimeType, fileFolder, }) {
        var _a;
        const ext = (_a = filename.split('.')) === null || _a === void 0 ? void 0 : _a[1];
        const id = (0, uuid_1.v4)();
        const name = `${id}${ext ? `.${ext}` : ''}`;
        const cropSizes = settings_1.settings.storage.imageCropSizes[fileFolder];
        if (!cropSizes) {
            throw new Error(`No crop sizes found for ${fileFolder}`);
        }
        const sizes = cropSizes.map((shortSize) => (0, image_1.getCropSize)(shortSize));
        const images = await Promise.all(sizes.map((size) => {
            var _a;
            return (0, sharp_1.default)(file).resize({
                [(size === null || size === void 0 ? void 0 : size.type) || 'width']: (_a = size === null || size === void 0 ? void 0 : size.value) !== null && _a !== void 0 ? _a : undefined,
            });
        }));
        const paths = [];
        await Promise.all(images.map(async (image, index) => {
            const buffer = await image.toBuffer();
            paths.push(`${fileFolder}/${cropSizes[index]}/${name}`);
            return this._uploadFile({
                file: buffer,
                filename: `${cropSizes[index]}/${name}`,
                mimeType,
                fileFolder,
            });
        }));
        return {
            id,
            mimeType,
            paths,
        };
    }
};
exports.FileUploadService = FileUploadService;
exports.FileUploadService = FileUploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [file_storage_service_1.FileStorageService])
], FileUploadService);
//# sourceMappingURL=file-upload.service.js.map