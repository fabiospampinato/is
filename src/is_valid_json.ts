
/* IMPORT */

import isString from './is_string';

/* MAIN */

const isValidJSON = ( value: unknown ): boolean => { //isJSONText

  if ( !isString ( value ) ) return false

  try {

    const valid = JSON.parse ( value ); // String ( value )

    return valid !== undefined;

  } catch {

    return false;

  }

};

/* EXPORT */

export default isValidJSON;
