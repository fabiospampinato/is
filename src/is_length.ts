
/* IMPORT */

import isSafeInteger from './is_safe_integer';

/* MAIN */

const isLength = ( value: unknown ): value is number => {

  return isSafeInteger ( value ) && value >= 0;

};

/* EXPORT */

export default isLength;