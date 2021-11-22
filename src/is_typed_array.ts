
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* HELPERS */

const tagRe = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|(?:BigInt|BigUint)64|Uint8Clamped)Array\]$/;

/* MAIN */

const isTypedArray = ( value: unknown ): value is Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array => {

  return isObjectLike ( value ) && tagRe.test ( getTag ( value ) );

};

/* EXPORT */

export default isTypedArray;
