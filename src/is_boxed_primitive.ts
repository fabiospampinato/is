
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isBoxedPrimitive = ( value: unknown ): value is bigint | boolean | number | string | symbol => {

  if ( !isObjectLike ( value ) ) return false;

  const tag = getTag ( value );

  return ( tag === '[object BigInt]' || tag === '[object Boolean]' || tag === '[object Number]' || tag === '[object String]' || tag === '[object Symbol]' );

};

/* EXPORT */

export default isBoxedPrimitive;
