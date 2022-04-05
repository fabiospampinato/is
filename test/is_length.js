
/* IMPORT */

import {describe} from 'fava';
import {isLength} from '../dist/index.js';

/* MAIN */

describe ( 'isLength', test => {

  test ( 'should return "true" for lengths', t => {

    for ( const value of [0, 3, Number.MAX_SAFE_INTEGER] ) {

      t.true ( isLength ( value ) );

    }

  });

  test ( 'should return "false" for non-lengths', t => {

    for ( const value of [-1, '1', 1.1, Number.MAX_SAFE_INTEGER + 1] ) {

      t.false ( isLength ( value ) );

    }

  });

});
