
/* IMPORT */

import getTag from './_get_tag';
import isFunction from './is_function';

/* MAIN */

const isAsyncGeneratorFunction = ( value: unknown ): value is AsyncGeneratorFunction => {

  return isFunction ( value ) && getTag ( value ) === '[object AsyncGeneratorFunction]';

};

/* EXPORT */

export default isAsyncGeneratorFunction;
