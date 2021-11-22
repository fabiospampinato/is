
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isRegExp = ( value: unknown ): value is RegExp => {

  return isObjectLike ( value ) && getTag ( value ) === '[object RegExp]';

};

/* EXPORT */

export default isRegExp;
