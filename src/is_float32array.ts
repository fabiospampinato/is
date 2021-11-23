
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isFloat32Array = ( value: unknown ): value is Float32Array => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Float32Array]';

};

/* EXPORT */

export default isFloat32Array;
