
/* IMPORT */

import getTag from './_get_tag';
import isArrayLike from './is_array_like';

/* MAIN */

const isArguments = ( value: unknown ): value is ArrayLike<unknown> => {

  return isArrayLike ( value ) && getTag ( value ) === '[object Arguments]';

};

/* EXPORT */

export default isArguments;
