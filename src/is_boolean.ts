
/* MAIN */

const isBoolean = ( value: unknown ): value is boolean => {

  return value === true || value === false;

};

/* EXPORT */

export default isBoolean;
