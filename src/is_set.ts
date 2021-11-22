
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isSet = ( value: unknown ): value is Set<unknown> => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Set]';

};

/* EXPORT */

export default isSet;
