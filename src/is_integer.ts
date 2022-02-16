
/* IMPORT */

import isFinite from './is_finite';

/* MAIN */

const isInteger = ( value: unknown ): boolean => {

  return isFinite ( value ) && Math.floor ( value ) === value;

};

/* EXPORT */

export default isInteger;
