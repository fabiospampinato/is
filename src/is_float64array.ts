
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isFloat64Array = ( value: unknown ): value is Float64Array => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Float64Array]';

};

/* EXPORT */

export default isFloat64Array;
