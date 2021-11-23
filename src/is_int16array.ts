
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isInt16Array = ( value: unknown ): value is Int16Array => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Int16Array]';

};

/* EXPORT */

export default isInt16Array;
