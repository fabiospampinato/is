
/* MAIN */

const isObjectLike = ( value: unknown ): value is object => {

  return typeof value === 'object' && value !== null;

};

/* EXPORT */

export default isObjectLike;
