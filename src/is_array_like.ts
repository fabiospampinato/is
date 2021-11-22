
/* IMPORT */

import isLength from './is_length';
import isObjectLike from './is_object_like';
import isString from './is_string';

/* MAIN */

const isArrayLike = ( value: unknown ): value is ArrayLike<unknown> => {

  return ( isString ( value ) || isObjectLike ( value ) ) && isLength ( value['length'] );

};

/* EXPORT */

export default isArrayLike;
