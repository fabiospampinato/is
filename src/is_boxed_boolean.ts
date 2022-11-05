
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isBoxedBoolean = ( value: unknown ): value is boolean => {

  return ( isObjectLike ( value ) && getTag ( value ) === '[object Boolean]' );

};

/* EXPORT */

export default isBoxedBoolean;
