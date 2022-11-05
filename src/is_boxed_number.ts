
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isBoxedNumber = ( value: unknown ): value is number => {

  return ( isObjectLike ( value ) && getTag ( value ) === '[object Number]' );

};

/* EXPORT */

export default isBoxedNumber;
