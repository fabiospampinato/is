
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isMap = ( value: unknown ): value is Map<unknown, unknown> => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Map]';

};

/* EXPORT */

export default isMap;
