
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* HELPERS */

const {getPrototypeOf} = Object;

/* MAIN */

const isPlainObject = ( value: unknown ): value is Record<string | number | symbol, unknown> => {

  if ( !isObjectLike ( value ) || getTag ( value ) !== '[object Object]' ) return false;

  const prototype = getPrototypeOf ( value );

  if ( prototype === null ) return true;

  return getPrototypeOf ( prototype ) === null;

};

/* EXPORT */

export default isPlainObject;
