
/* IMPORT */

import isObjectLike from './is_object_like';
import isPlainObject from './is_plain_object';

/* MAIN */

const isText = ( value: unknown ): value is Text => {

  return isObjectLike ( value ) && value['nodeType'] === 3 && !isPlainObject ( value );

};

/* EXPORT */

export default isText;
