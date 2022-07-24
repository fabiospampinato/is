
/* IMPORT */

import isObjectLike from './is_object_like';
import isPlainObject from './is_plain_object';

/* MAIN */

const isComment = ( value: unknown ): value is Comment => {

  return isObjectLike ( value ) && value['nodeType'] === 8 && !isPlainObject ( value );

};

/* EXPORT */

export default isComment;
