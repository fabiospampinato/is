
/* IMPORT */

import isBoxedBigInt from './is_boxed_bigint';

/* MAIN */

const isBigInt = ( value: unknown ): value is bigint => {

  return typeof value === 'bigint' || isBoxedBigInt ( value );

};

/* EXPORT */

export default isBigInt;
