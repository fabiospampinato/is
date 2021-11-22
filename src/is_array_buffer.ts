
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isArrayBuffer = ( value: unknown ): value is ArrayBuffer => {

  return isObjectLike ( value ) && getTag ( value ) === '[object ArrayBuffer]';

};

/* EXPORT */

export default isArrayBuffer;
