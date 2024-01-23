"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Driver = void 0;
const stream_1 = require("stream");
const client_s3_1 = require("@aws-sdk/client-s3");
class S3Driver {
    constructor(options) {
        const { bucketName, region, endpoint } = options, s3Options = __rest(options, ["bucketName", "region", "endpoint"]);
        if (!bucketName || !region) {
            return;
        }
        this.s3Client = new client_s3_1.S3(Object.assign(Object.assign({}, s3Options), { region, endpoint }));
        this.bucketName = bucketName;
    }
    get client() {
        return this.s3Client;
    }
    async write(params) {
        const command = new client_s3_1.PutObjectCommand({
            Key: `${params.folder}/${params.name}`,
            Body: params.file,
            ContentType: params.mimeType,
            Bucket: this.bucketName,
        });
        await this.s3Client.send(command);
    }
    async read(params) {
        const command = new client_s3_1.GetObjectCommand({
            Key: `${params.folderPath}/${params.filename}`,
            Bucket: this.bucketName,
        });
        const file = await this.s3Client.send(command);
        if (!file || !file.Body || !(file.Body instanceof stream_1.Readable)) {
            throw new Error('Unable to get file stream');
        }
        return stream_1.Readable.from(file.Body);
    }
    async checkBucketExists(args) {
        try {
            await this.s3Client.headBucket(args);
            return true;
        }
        catch (error) {
            if (error instanceof client_s3_1.NotFound) {
                return false;
            }
            throw error;
        }
    }
    async createBucket(args) {
        const exist = await this.checkBucketExists({
            Bucket: args.Bucket,
        });
        if (exist) {
            return;
        }
        return this.s3Client.createBucket(args);
    }
}
exports.S3Driver = S3Driver;
//# sourceMappingURL=s3.driver.js.map