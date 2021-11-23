
/* IMPORT */

import isInteger from './is_integer';

/* MAIN */

const isEven = ( value: unknown ): value is number => {

  return isInteger ( value ) && value % 2 === 0;

};

/* EXPORT */

export default isEven;
