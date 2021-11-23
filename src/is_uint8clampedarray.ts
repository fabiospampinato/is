
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isUint8ClampedArray = ( value: unknown ): value is Uint8ClampedArray => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Uint8ClampedArray]';

};

/* EXPORT */

export default isUint8ClampedArray;
