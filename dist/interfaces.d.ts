import { Webp } from "../libwebp/dist/webp.js";
export declare type DetectWebpImage = (image: HTMLImageElement) => boolean;
export interface WebpMachineOptions {
    webp?: Webp;
    webpSupport?: Promise<boolean>;
    detectWebpImage?: DetectWebpImage;
}
export interface PolyfillDocumentOptions {
    document?: Document;
}
