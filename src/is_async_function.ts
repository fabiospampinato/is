
/* IMPORT */

import getTag from './_get_tag';
import isFunction from './is_function';

/* MAIN */

const isAsyncFunction = ( value: unknown ): value is (( ...args: unknown[] ) => Promise<unknown>) => {

  return isFunction ( value ) && getTag ( value ) === '[object AsyncFunction]';

};

/* EXPORT */

export default isAsyncFunction;
