
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isBigInt64Array = ( value: unknown ): value is BigInt64Array => {

  return isObjectLike ( value ) && getTag ( value ) === '[object BigInt64Array]';

};

/* EXPORT */

export default isBigInt64Array;
