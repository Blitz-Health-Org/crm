/// <reference types="node" />
/// <reference types="node" />
import { Readable } from 'stream';
import { CreateBucketCommandInput, HeadBucketCommandInput, S3, S3ClientConfig } from '@aws-sdk/client-s3';
import { StorageDriver } from './interfaces/storage-driver.interface';
export interface S3DriverOptions extends S3ClientConfig {
    bucketName: string;
    endpoint?: string;
    region: string;
}
export declare class S3Driver implements StorageDriver {
    private s3Client;
    private bucketName;
    constructor(options: S3DriverOptions);
    get client(): S3;
    write(params: {
        file: Buffer | Uint8Array | string;
        name: string;
        folder: string;
        mimeType: string | undefined;
    }): Promise<void>;
    read(params: {
        folderPath: string;
        filename: string;
    }): Promise<Readable>;
    checkBucketExists(args: HeadBucketCommandInput): Promise<boolean>;
    createBucket(args: CreateBucketCommandInput): Promise<import("@aws-sdk/client-s3").CreateBucketCommandOutput | undefined>;
}
