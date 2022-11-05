
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isBoxedSymbol = ( value: unknown ): value is symbol => {

  return ( isObjectLike ( value ) && getTag ( value ) === '[object Symbol]' );

};

/* EXPORT */

export default isBoxedSymbol;
