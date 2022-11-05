
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isBoxedString = ( value: unknown ): value is string => {

  return ( isObjectLike ( value ) && getTag ( value ) === '[object String]' );

};

/* EXPORT */

export default isBoxedString;
