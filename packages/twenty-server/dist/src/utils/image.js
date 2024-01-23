"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageBufferFromUrl = exports.getCropSize = void 0;
const cropRegex = /([w|h])([0-9]+)/;
const getCropSize = (value) => {
    const match = value.match(cropRegex);
    if (value === 'original' || match === null) {
        return null;
    }
    return {
        type: match[1] === 'w' ? 'width' : 'height',
        value: +match[2],
    };
};
exports.getCropSize = getCropSize;
const getImageBufferFromUrl = async (url, axiosInstance) => {
    const response = await axiosInstance.get(url, {
        responseType: 'arraybuffer',
    });
    return Buffer.from(response.data, 'binary');
};
exports.getImageBufferFromUrl = getImageBufferFromUrl;
//# sourceMappingURL=image.js.map