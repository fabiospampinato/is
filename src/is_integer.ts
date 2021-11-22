
/* IMPORT */

import isFinite from './is_finite';

/* MAIN */

const isInteger = ( value: unknown ): value is number => {

  return isFinite ( value ) && Math.floor ( value ) === value;

};

/* EXPORT */

export default isInteger;
