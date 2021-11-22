
/* IMPORT */

import isObject from './is_object';

/* HELPERS */

const nativeRe = new RegExp ( `^${Function.prototype.toString.call ( Object.prototype.hasOwnProperty ).replace ( /[\\^$.*+?()[\]{}|]/g, '\\$&' ).replace ( /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?' )}$` );

/* MAIN */

const isNative = ( value: unknown ): boolean => {

  return isObject ( value ) && nativeRe.test ( String ( value ) );

};

/* EXPORT */

export default isNative;
