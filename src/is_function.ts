
/* MAIN */

const isFunction = ( value: unknown ): value is (( ...args: unknown[] ) => unknown) => {

  return typeof value === 'function';

};

/* EXPORT */

export default isFunction;
