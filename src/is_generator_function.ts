
/* IMPORT */

import getTag from './_get_tag';
import isFunction from './is_function';

/* MAIN */

const isGeneratorFunction = ( value: unknown ): value is GeneratorFunction => {

  return isFunction ( value ) && getTag ( value ) === '[object GeneratorFunction]';

};

/* EXPORT */

export default isGeneratorFunction;
