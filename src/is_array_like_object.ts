
/* IMPORT */

import isLength from './is_length';
import isObjectLike from './is_object_like';

/* MAIN */

const isArrayLikeObject = ( value: unknown ): value is ArrayLike<unknown> => {

  return isObjectLike ( value ) && isLength ( value['length'] );

};

/* EXPORT */

export default isArrayLikeObject;
