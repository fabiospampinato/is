
/* IMPORT */

import {describe} from 'fava';
import {isSafeInteger} from '../dist/index.js';

/* MAIN */

describe ( 'isSafeInteger', test => {

  test ( 'should return "true" for lengths', t => {

    for ( const value of [-Number.MAX_SAFE_INTEGER, -3, -0, 0, 3, Number.MAX_SAFE_INTEGER] ) {

      t.true ( isSafeInteger ( value ) );

    }

  });

  test ( 'should return "false" for non-lengths', t => {

    for ( const value of [Infinity, -Infinity, NaN, 1.1, '1', 1.1, Number.MAX_SAFE_INTEGER + 1, - Number.MAX_SAFE_INTEGER - 1] ) {

      t.false ( isSafeInteger ( value ) );

    }

  });

});
