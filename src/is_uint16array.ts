
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isUint16Array = ( value: unknown ): value is Uint16Array => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Uint16Array]';

};

/* EXPORT */

export default isUint16Array;
