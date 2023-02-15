
/* HELPERS */

const SYMBOLS_ARE_WEAK_REFERABLE = (() => { // They weren't supported from the beginning

  try {

    new WeakSet ().add ( Symbol () as any ); //TSC

    return true;

  } catch {

    return false;

  }

})();

/* MAIN */

const isWeakReferable = ( value: unknown ): value is object | symbol => {

  if ( value === null ) return false;

  const type = typeof value;

  return type === 'object' || type === 'function' || ( SYMBOLS_ARE_WEAK_REFERABLE && type === 'symbol' && !Symbol.keyFor ( value as symbol ) ); //TSC

};

/* EXPORT */

export default isWeakReferable;
