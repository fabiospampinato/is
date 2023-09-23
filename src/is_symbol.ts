
/* MAIN */

const isSymbol = ( value: unknown ): value is symbol => {

  return typeof value === 'symbol';

};

/* EXPORT */

export default isSymbol;
