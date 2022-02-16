
/* MAIN */

const isFiniteNumber = ( value: unknown ): boolean => {

  return typeof value === 'number' && isFinite ( value );

};

/* EXPORT */

export default isFiniteNumber;
