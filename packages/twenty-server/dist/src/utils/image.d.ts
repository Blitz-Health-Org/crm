/// <reference types="node" />
import { Axios } from 'axios';
export type ShortCropSize = `${'w' | 'h'}${number}` | 'original';
export interface CropSize {
    type: 'width' | 'height';
    value: number;
}
export declare const getCropSize: (value: ShortCropSize) => CropSize | null;
export declare const getImageBufferFromUrl: (url: string, axiosInstance: Axios) => Promise<Buffer>;
