
/* IMPORT */

import getTag from './_get_tag';

/* MAIN */

const isWindow = ( value: unknown ): value is Window => {

  return ( value === globalThis) && getTag ( value ) === '[object Window]';

};

/* EXPORT */

export default isWindow;
