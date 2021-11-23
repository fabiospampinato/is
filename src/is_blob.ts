
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isBlob = ( value: unknown ): value is Blob => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Blob]';

};

/* EXPORT */

export default isBlob;
