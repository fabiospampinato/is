
/* IMPORT */

import isObjectLike from './is_object_like';
import isPlainObject from './is_plain_object';

/* MAIN */

const isDocument = ( value: unknown ): value is Document => {

  return isObjectLike ( value ) && value['nodeType'] === 9 && !isPlainObject ( value );

};

/* EXPORT */

export default isDocument;
