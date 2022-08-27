
/* IMPORT */

import isObjectLike from './is_object_like';
import isPlainObject from './is_plain_object';

/* MAIN */

const isNode = ( value: unknown ): value is Node => {

  return isObjectLike ( value ) && value['nodeType'] >= 1 && value['nodeType'] <= 11 && !isPlainObject ( value );

};

/* EXPORT */

export default isNode;
