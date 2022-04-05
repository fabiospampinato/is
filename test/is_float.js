
/* IMPORT */

import {describe} from 'fava';
import {isFloat} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isFloat', test => {

  test ( 'should return "true" for integers', t => {

    t.true ( isFloat ( 0.1 ) );
    t.true ( isFloat ( -0.1 ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isFloat () );
    t.false ( isFloat ( null ) );
    t.false ( isFloat ( undefined ) );
    t.false ( isFloat ( '' ) );
    t.false ( isFloat ( args ) );
    t.false ( isFloat ( [1] ) );
    t.false ( isFloat ( new Error () ) );
    t.false ( isFloat ( [].slice ) );
    t.false ( isFloat ( { 'a': 1 } ) );
    t.false ( isFloat ( /x/ ) );
    t.false ( isFloat ( 'a' ) );
    t.false ( isFloat ( Symbol () ) );
    t.false ( isFloat ( -Infinity ) );
    t.false ( isFloat ( Infinity ) );
    t.false ( isFloat ( NaN ) );
    t.false ( isFloat ( Object ( 0 ) ) );
    t.false ( isFloat ( -100 ) );
    t.false ( isFloat ( -0 ) );
    t.false ( isFloat ( 0 ) );
    t.false ( isFloat ( 100 ) );
    t.false ( isFloat ( Number ( 0 ) ) );
    t.false ( isFloat ( 0.0 ) );

  });

  test ( 'should work with floats from another realm', t => {

    t.true ( isFloat ( realm.float ) );

  });

});
