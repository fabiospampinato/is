
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isWeakMap = ( value: unknown ): value is WeakMap<object, unknown> => {

  return isObjectLike ( value ) && getTag ( value ) === '[object WeakMap]';

};

/* EXPORT */

export default isWeakMap;
