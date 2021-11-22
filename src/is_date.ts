
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isDate = ( value: unknown ): value is Date => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Date]';

};

/* EXPORT */

export default isDate;
