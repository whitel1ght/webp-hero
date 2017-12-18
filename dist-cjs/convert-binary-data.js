"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDataURIToBinary = exports.isBase64Url = void 0;
var BASE64_MARKER = ";base64,";
exports.isBase64Url = function (src) { return src.indexOf(BASE64_MARKER) > -1; };
exports.convertDataURIToBinary = function (dataURI) {
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
    for (var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
};
//# sourceMappingURL=convert-binary-data.js.map