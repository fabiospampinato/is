
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isNumber = ( value: unknown ): value is number => {

  return typeof value === 'number' || ( isObjectLike ( value ) && getTag ( value ) === '[object Number]' );

};

/* EXPORT */

export default isNumber;
