
/* IMPORT */

import {describe} from 'fava';
import {isFalsy} from '../dist/index.js';
import {args} from './_utils.js';

/* MAIN */

describe ( 'isFalsy', test => {

  test ( 'should return "true" for falsy values', t => {

    t.true ( isFalsy () );
    t.true ( isFalsy ( null ) );
    t.true ( isFalsy ( undefined ) );
    t.true ( isFalsy ( false ) );
    t.true ( isFalsy ( 0 ) );
    t.true ( isFalsy ( NaN ) );
    t.true ( isFalsy ( '' ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isFalsy ( args ) );
    t.false ( isFalsy ( new ArrayBuffer ( 2 ) ) );
    t.false ( isFalsy ( true ) );
    t.false ( isFalsy ( new Date () ) );
    t.false ( isFalsy ( new Error () ) );
    t.false ( isFalsy ( [].slice ) );
    t.false ( isFalsy ( { 'a': 1 } ) );
    t.false ( isFalsy ( 1 ) );
    t.false ( isFalsy ( /x/ ) );
    t.false ( isFalsy ( 'a' ) );
    t.false ( isFalsy ( Symbol () ) );
    t.false ( isFalsy ( Object ( true ) ) );
    t.false ( isFalsy ( Object ( false ) ) );

  });

});
