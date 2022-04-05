
/* IMPORT */

import {describe} from 'fava';
import {isNaN} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isNaN', test => {

  test ( 'should return "true" for "NaN"', t => {

    t.true ( isNaN ( NaN ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isNaN () );
    t.false ( isNaN ( null ) );
    t.false ( isNaN ( undefined ) );
    t.false ( isNaN ( false ) );
    t.false ( isNaN ( 0 ) );
    t.false ( isNaN ( '' ) );
    t.false ( isNaN ( args ) );
    t.false ( isNaN ( [1] ) );
    t.false ( isNaN ( true ) );
    t.false ( isNaN ( new Date () ) );
    t.false ( isNaN ( new Error () ) );
    t.false ( isNaN ( [].slice ) );
    t.false ( isNaN ( { 'a': 1 } ) );
    t.false ( isNaN ( 1 ) );
    t.false ( isNaN ( /x/ ) );
    t.false ( isNaN ( 'a' ) );
    t.false ( isNaN ( Symbol () ) );

  });

  test ( 'should work with "NaN" from another realm', t => {

    t.true ( isNaN ( realm.nan ) );

  });

});
