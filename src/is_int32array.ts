
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isInt32Array = ( value: unknown ): value is Int32Array => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Int32Array]';

};

/* EXPORT */

export default isInt32Array;
