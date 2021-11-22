
/* MAIN */

const isFiniteNumber = ( value: unknown ): value is number => {

  return typeof value === 'number' && isFinite ( value );

};

/* EXPORT */

export default isFiniteNumber;
