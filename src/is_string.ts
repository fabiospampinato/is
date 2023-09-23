
/* MAIN */

const isString = ( value: unknown ): value is string => {

  return typeof value === 'string';

};

/* EXPORT */

export default isString;
