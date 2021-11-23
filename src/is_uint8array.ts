
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isUint8Array = ( value: unknown ): value is Uint8Array => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Uint8Array]';

};

/* EXPORT */

export default isUint8Array;
