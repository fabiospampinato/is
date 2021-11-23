
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isInt8Array = ( value: unknown ): value is Int8Array => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Int8Array]';

};

/* EXPORT */

export default isInt8Array;
