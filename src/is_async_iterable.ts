
/* IMPORT */

import isFunction from './is_function';
import isObject from './is_object';

/* MAIN */

const isAsyncIterable = <T = unknown> ( value: unknown ): value is AsyncIterable<T> => {

  return isObject ( value ) && isFunction ( value[Symbol.asyncIterator] );

};

/* EXPORT */

export default isAsyncIterable;
