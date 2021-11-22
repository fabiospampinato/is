
/* MAIN */

const isNaN = ( value: unknown ): value is number => {

  return value !== value;

};

/* EXPORT */

export default isNaN;
