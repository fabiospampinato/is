
/* IMPORT */

import isFunction from './is_function';
import isObject from './is_object';

/* MAIN */

const isPrototype = ( value: unknown ): value is object => {

  const constructor = isObject ( value ) && value.constructor;
  const prototype = ( isFunction ( constructor ) && constructor.prototype ) || Object.prototype;

  return ( value === prototype );

};

/* EXPORT */

export default isPrototype;
