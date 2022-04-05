
/* IMPORT */

import {describe} from 'fava';
import {isNegativeZero} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isNegativeZero', test => {

  test ( 'should return "true" for negative zeros', t => {

    t.true ( isNegativeZero ( -0 ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isNegativeZero () );
    t.false ( isNegativeZero ( null ) );
    t.false ( isNegativeZero ( undefined ) );
    t.false ( isNegativeZero ( 0 ) );
    t.false ( isNegativeZero ( NaN ) );
    t.false ( isNegativeZero ( '' ) );
    t.false ( isNegativeZero ( args ) );
    t.false ( isNegativeZero ( [1] ) );
    t.false ( isNegativeZero ( new Error () ) );
    t.false ( isNegativeZero ( [].slice ) );
    t.false ( isNegativeZero ( { 'a': 1 } ) );
    t.false ( isNegativeZero ( 1 ) );
    t.false ( isNegativeZero ( /x/ ) );
    t.false ( isNegativeZero ( 'a' ) );
    t.false ( isNegativeZero ( Symbol () ) );

  });

  test ( 'should work with numbers from another realm', t => {

    t.true ( isNegativeZero ( realm.negzero ) );

  });

});
