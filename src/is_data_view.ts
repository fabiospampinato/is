
/* IMPORT */

import getTag from './_get_tag';
import isObjectLike from './is_object_like';

/* MAIN */

const isDataView = ( value: unknown ): value is DataView => {

  return isObjectLike ( value ) && getTag ( value ) === '[object DataView]';

};

/* EXPORT */

export default isDataView;
