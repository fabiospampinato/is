
/* IMPORT */

import isFunction from './is_function';
import isObject from './is_object';
import isString from './is_string';

/* MAIN */

const isIterable = <T = unknown> ( value: unknown ): value is Iterable<T> => {

  return isString ( value ) || ( isObject ( value ) && isFunction ( value[Symbol.iterator] ) );

};

/* EXPORT */

export default isIterable;
