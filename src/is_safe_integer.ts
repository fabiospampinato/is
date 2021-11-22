
/* IMPORT */

import isInteger from './is_integer';

/* HELPERS */

const MAX_SAFE_INTEGER = 9007199254740991;

/* MAIN */

const isSafeInteger = ( value: unknown ): value is number => {

  return isInteger ( value ) && ( value >= 0 ? value <= MAX_SAFE_INTEGER : value >= -MAX_SAFE_INTEGER );

};

/* EXPORT */

export default isSafeInteger;
