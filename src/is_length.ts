
/* IMPORT */

import isNumber from './is_number';
import isSafeInteger from './is_safe_integer';

/* MAIN */

const isLength = ( value: unknown ): boolean => {

  return isNumber ( value ) && isSafeInteger ( value ) && value >= 0;

};

/* EXPORT */

export default isLength;
