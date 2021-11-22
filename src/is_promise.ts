
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isPromise = ( value: unknown ): value is Promise<unknown> => {

  return isObjectLike ( value ) && getTag ( value ) === '[object Promise]';

};

/* EXPORT */

export default isPromise;
