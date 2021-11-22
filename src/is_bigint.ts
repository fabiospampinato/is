
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isBigInt = ( value: unknown ): value is bigint => {

  return typeof value === 'bigint' || ( isObjectLike ( value ) && getTag ( value ) === '[object BigInt]' );

};

/* EXPORT */

export default isBigInt;
