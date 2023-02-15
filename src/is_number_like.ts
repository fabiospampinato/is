
/* IMPORT */

import isNaN from './is_nan';
import isFinite from './is_finite';

/* MAIN */

const isNumberLike = ( value: string ): boolean => {

  return !isNaN ( parseFloat ( String ( value ) ) ) && isFinite ( Number ( value ) );

};

/* EXPORT */

export default isNumberLike;
