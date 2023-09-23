
/* MAIN */

const isNumber = ( value: unknown ): value is number => {

  return typeof value === 'number';

};

/* EXPORT */

export default isNumber;
