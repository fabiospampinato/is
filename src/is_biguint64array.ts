
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isBigUint64Array = ( value: unknown ): value is BigUint64Array => {

  return isObjectLike ( value ) && getTag ( value ) === '[object BigUint64Array]';

};

/* EXPORT */

export default isBigUint64Array;
