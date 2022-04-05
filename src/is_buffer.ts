
/* MAIN */

const isBuffer = ( value: unknown ): value is Buffer => {

  const Buffer = globalThis.Buffer;
  const hasIsBuffer = ( typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function' );

  return hasIsBuffer ? Buffer.isBuffer ( value ) : false;

};

/* EXPORT */

export default isBuffer;
