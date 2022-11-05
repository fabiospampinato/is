
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isBoxedBigInt = ( value: unknown ): value is bigint => {

  return ( isObjectLike ( value ) && getTag ( value ) === '[object BigInt]' );

};

/* EXPORT */

export default isBoxedBigInt;
