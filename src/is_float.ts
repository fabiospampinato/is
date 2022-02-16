
/* IMPORT */

import isFinite from './is_finite';
import isNumber from './is_number';

/* MAIN */

const isFloat = ( value: unknown ): boolean => {

  return isNumber ( value ) && isFinite ( value ) && Math.floor ( value ) !== value;

};

/* EXPORT */

export default isFloat;
