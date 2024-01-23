/// <reference types="node" />
/// <reference types="node" />
import { Readable } from 'stream';
export declare const streamToBuffer: (stream: Readable) => Promise<Buffer>;
