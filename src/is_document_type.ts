
/* IMPORT */

import isObjectLike from './is_object_like';
import isPlainObject from './is_plain_object';

/* MAIN */

const isDocumentType = ( value: unknown ): value is DocumentType => {

  return isObjectLike ( value ) && value['nodeType'] === 10 && !isPlainObject ( value );

};

/* EXPORT */

export default isDocumentType;
