
/* IMPORT */

import isInteger from './is_integer';
import isNumber from './is_number';

/* HELPERS */

const MAX_SAFE_INTEGER = 9007199254740991;

/* MAIN */

const isSafeInteger = ( value: unknown ): boolean => {

  return isNumber ( value ) && isInteger ( value ) && ( value >= 0 ? value <= MAX_SAFE_INTEGER : value >= -MAX_SAFE_INTEGER );

};

/* EXPORT */

export default isSafeInteger;
