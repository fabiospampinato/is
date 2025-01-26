
/* MAIN */

const isURLObject = ( value: unknown ): value is URL => {

  return value?.constructor === URL;

};

/* EXPORT */

export default isURLObject;
