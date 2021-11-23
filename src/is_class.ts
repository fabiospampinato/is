
/* IMPORT */

import isFunction from './is_function';

/* MAIN */

const isClass = ( value: unknown ): value is (new (...args: unknown[]) => unknown) => {

  return isFunction ( value ) && value.toString ().substring ( 0, 6 ) === 'class ';

};

/* EXPORT */

export default isClass;
