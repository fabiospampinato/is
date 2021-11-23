
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isSharedArrayBuffer = ( value: unknown ): value is SharedArrayBuffer => {

  return isObjectLike ( value ) && getTag ( value ) === '[object SharedArrayBuffer]';

};

/* EXPORT */

export default isSharedArrayBuffer;
