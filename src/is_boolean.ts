
/* IMPORT */

import isBoxedBoolean from './is_boxed_boolean';

/* MAIN */

const isBoolean = ( value: unknown ): value is boolean => {

  return value === true || value === false || isBoxedBoolean ( value );

};

/* EXPORT */

export default isBoolean;
