
/* IMPORT */

import isObjectLike from './is_object_like';
import isPlainObject from './is_plain_object';

/* MAIN */

const isAttribute = ( value: unknown ): value is Attr => {

  return isObjectLike ( value ) && value['nodeType'] === 2 && !isPlainObject ( value );

};

/* EXPORT */

export default isAttribute;
