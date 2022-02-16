
/* IMPORT */

import isFinite from './is_finite';

/* MAIN */

const isFloat = ( value: unknown ): boolean => {

  return isFinite ( value ) && Math.floor ( value ) !== value;

};

/* EXPORT */

export default isFloat;
