
/* MAIN */

const isNegativeZero = ( value: unknown ): value is -0 => {

  return value === 0 && ( 1 / value ) === -Infinity;

};

/* EXPORT */

export default isNegativeZero;
