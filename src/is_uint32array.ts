
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isUint32Array = ( value: unknown ): value is Uint32Array => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Uint32Array]';

};

/* EXPORT */

export default isUint32Array;
