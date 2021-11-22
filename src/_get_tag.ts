
/* HELPERS */

const {toString} = Object.prototype;

/* MAIN */

const getTag = ( value: unknown ): string => {

  if ( value === null ) return '[object Null]';

  if ( value === undefined ) return '[object Undefined]';

  return toString.call ( value );

};

/* EXPORT */

export default getTag;
