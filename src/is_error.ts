
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';
import isPlainObject from './is_plain_object';
import isString from './is_string';

/* MAIN */

const isError = ( value: unknown ): value is Error => {

  if ( !isObjectLike ( value ) ) return false;

  const tag = getTag ( value );

  return tag === '[object Error]' || tag === '[object DOMException]' || ( isString ( value['message'] ) && isString ( value['name'] ) && !isPlainObject ( value ) );

};

/* EXPORT */

export default isError;
