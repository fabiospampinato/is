
/* MAIN */

const isObject = ( value: unknown ): value is object => {

  if ( value === null ) return false;

  const type = typeof value;

  return type === 'object' || type === 'function';

};

/* EXPORT */

export default isObject;
