
/* IMPORT */

import isFunction from './is_function';

/* MAIN */

const isBoundFunction = ( value: unknown ): value is (( ...args: unknown[] ) => unknown) => {

  return isFunction ( value ) && !value.hasOwnProperty ( 'prototype' );

};

/* EXPORT */

export default isBoundFunction;
