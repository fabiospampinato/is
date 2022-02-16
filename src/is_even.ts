
/* IMPORT */

import isInteger from './is_integer';
import isNumber from './is_number';

/* MAIN */

const isEven = ( value: unknown ): boolean => {

  return isNumber ( value ) && isInteger ( value ) && value % 2 === 0;

};

/* EXPORT */

export default isEven;
