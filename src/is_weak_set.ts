
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isWeakSet = ( value: unknown ): value is WeakSet<object> => {

  return isObjectLike ( value ) && getTag ( value ) === '[object WeakSet]';

};

/* EXPORT */

export default isWeakSet;
