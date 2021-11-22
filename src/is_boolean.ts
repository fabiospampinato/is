
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isBoolean = ( value: unknown ): value is boolean => {

  return value === true || value === false || ( isObjectLike ( value ) && getTag ( value ) === '[object Boolean]' );

};

/* EXPORT */

export default isBoolean;
