
/* IMPORT */

import isBoxedString from './is_boxed_string';

/* MAIN */

const isString = ( value: unknown ): value is string => {

  return typeof value === 'string' || isBoxedString ( value );

};

/* EXPORT */

export default isString;
