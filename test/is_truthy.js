
/* IMPORT */

import {describe} from 'fava';
import {isTruthy} from '../dist/index.js';
import {args} from './_utils.js';

/* MAIN */

describe ( 'isTruthy', test => {

  test ( 'should return "true" for truthy values', t => {

    t.true ( isTruthy ( args ) );
    t.true ( isTruthy ( new ArrayBuffer ( 2 ) ) );
    t.true ( isTruthy ( true ) );
    t.true ( isTruthy ( new Date () ) );
    t.true ( isTruthy ( new Error () ) );
    t.true ( isTruthy ( [].slice ) );
    t.true ( isTruthy ( { 'a': 1 } ) );
    t.true ( isTruthy ( 1 ) );
    t.true ( isTruthy ( /x/ ) );
    t.true ( isTruthy ( 'a' ) );
    t.true ( isTruthy ( Symbol () ) );
    t.true ( isTruthy ( Object ( true ) ) );
    t.true ( isTruthy ( Object ( false ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isTruthy () );
    t.false ( isTruthy ( null ) );
    t.false ( isTruthy ( undefined ) );
    t.false ( isTruthy ( false ) );
    t.false ( isTruthy ( 0 ) );
    t.false ( isTruthy ( NaN ) );
    t.false ( isTruthy ( '' ) );

  });

});
