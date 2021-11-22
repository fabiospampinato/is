
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isSymbol = ( value: unknown ): value is symbol => {

  return typeof value === 'symbol' || ( isObjectLike ( value ) && getTag ( value ) === '[object Symbol]' );

};

/* EXPORT */

export default isSymbol;
