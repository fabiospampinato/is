
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isString = ( value: unknown ): value is string => {

  return typeof value === 'string' || ( isObjectLike ( value ) && getTag ( value ) === '[object String]' );

};

/* EXPORT */

export default isString;
