
/* IMPORT */

import {describe} from 'fava';
import {isNil} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isNil', test => {

  test ( 'should return "true" for "null" and "undefined"', t => {

    t.true ( isNil () );
    t.true ( isNil ( undefined ) );
    t.true ( isNil ( null ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isNil ( false ) );
    t.false ( isNil ( 0 ) );
    t.false ( isNil ( NaN ) );
    t.false ( isNil ( '' ) );
    t.false ( isNil ( args ) );
    t.false ( isNil ( [1] ) );
    t.false ( isNil ( true ) );
    t.false ( isNil ( new Date () ) );
    t.false ( isNil ( new Error () ) );
    t.false ( isNil ( [].slice ) );
    t.false ( isNil ( { 'a': 1 } ) );
    t.false ( isNil ( 1 ) );
    t.false ( isNil ( /x/ ) );
    t.false ( isNil ( 'a' ) );
    t.false ( isNil ( Symbol () ) );

  });

  test ( 'should work with "null" and "undefined" from another realm', t => {

    t.true ( isNil ( realm.null ) );
    t.true ( isNil ( realm.undefined ) );

  });

});
