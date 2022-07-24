
/* IMPORT */

import isObjectLike from './is_object_like';
import isPlainObject from './is_plain_object';

/* MAIN */

const isDocumentFragment = ( value: unknown ): value is DocumentFragment => {

  return isObjectLike ( value ) && value['nodeType'] === 11 && !isPlainObject ( value );

};

/* EXPORT */

export default isDocumentFragment;
