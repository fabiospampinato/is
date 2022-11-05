
/* IMPORT */

import isBoxedSymbol from './is_boxed_symbol';

/* MAIN */

const isSymbol = ( value: unknown ): value is symbol => {

  return typeof value === 'symbol' || isBoxedSymbol ( value );

};

/* EXPORT */

export default isSymbol;
