
/* IMPORT */

import isBoxedNumber from './is_boxed_number';

/* MAIN */

const isNumber = ( value: unknown ): value is number => {

  return typeof value === 'number' || isBoxedNumber ( value );

};

/* EXPORT */

export default isNumber;
