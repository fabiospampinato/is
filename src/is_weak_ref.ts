
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isWeakRef = ( value: unknown ): value is WeakRef<WeakKey> => {

  return isObjectLike ( value ) && getTag ( value ) === '[object WeakRef]';

};

/* EXPORT */

export default isWeakRef;
