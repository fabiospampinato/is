
/* MAIN */

const isURL = ( value: unknown ): value is string | URL => {

  return URL.canParse ( String ( value ) );

};

/* EXPORT */

export default isURL;
