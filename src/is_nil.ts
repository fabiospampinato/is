
/* MAIN */

const isNil = ( value: unknown ): value is null | undefined => {

  return value === null || value === undefined;

};

/* EXPORT */

export default isNil;
