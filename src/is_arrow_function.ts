
/* IMPORT */

import isFunction from './is_function';

/* HELPERS */

const {toString} = Function.prototype;
const arrowRe = /^\([^)]*\) *=>|^[^=]*=>/;
const regularRe = /^\s*function/;

/* MAIN */

const isArrowFunction = ( value: unknown ): value is (( ...args: unknown[] ) => unknown) => {

  if ( !isFunction ( value ) ) return false;

  const fn = toString.call ( value );

  return !regularRe.test ( fn ) && arrowRe.test ( fn );

};

/* EXPORT */

export default isArrowFunction;
