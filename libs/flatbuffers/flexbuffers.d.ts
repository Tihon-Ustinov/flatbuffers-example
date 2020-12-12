import { Builder } from './flexbuffers/builder';
import { toReference as toReferenceFunction } from './flexbuffers/reference';
export declare function builder(): Builder;
export declare function toObject(buffer: Uint8Array): unknown;
export declare function encode(object: unknown, size?: number, deduplicateStrings?: boolean, deduplicateKeys?: boolean, deduplicateKeyVectors?: boolean): Uint8Array;
export declare namespace flexbuffers {
    const builder: typeof import("./flexbuffers").builder;
    const toObject: typeof import("./flexbuffers").toObject;
    const encode: typeof import("./flexbuffers").encode;
    const toReference: typeof toReferenceFunction;
}
export default flexbuffers;
