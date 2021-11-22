
/* IMPORT */

import isObject from './is_object';

/* MAIN */

const isPrimitive = ( value: unknown ): value is null | undefined | string | number | boolean | symbol | bigint => {

  return !isObject ( value );

};

/* EXPORT */

export default isPrimitive;
