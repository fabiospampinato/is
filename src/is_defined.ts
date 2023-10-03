
/* MAIN */

const isDefined = ( value: unknown ): value is object | string | number | boolean | symbol | bigint => {

  return value !== null && value !== undefined;

};

/* EXPORT */

export default isDefined;
