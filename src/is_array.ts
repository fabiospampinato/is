
/* IMPORT */

import getTag from './_get_tag';
import isArrayLike from './is_array_like';

/* MAIN */

const isArray = ( value: unknown ): value is Array<unknown> => {

  return isArrayLike ( value ) && getTag ( value ) === '[object Array]';

};

/* EXPORT */

export default isArray;
