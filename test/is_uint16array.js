
/* IMPORT */

import {describe} from 'fava';
import {isUint16Array} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isUint16Array', test => {

  test ( 'should return "true" for Uint16Arrays', t => {

    t.true ( isUint16Array ( new Uint16Array () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isUint16Array () );
    t.false ( isUint16Array ( null ) );
    t.false ( isUint16Array ( undefined ) );
    t.false ( isUint16Array ( false ) );
    t.false ( isUint16Array ( 0 ) );
    t.false ( isUint16Array ( NaN ) );
    t.false ( isUint16Array ( '' ) );
    t.false ( isUint16Array ( args ) );
    t.false ( isUint16Array ( [1] ) );
    t.false ( isUint16Array ( true ) );
    t.false ( isUint16Array ( new Date () ) );
    t.false ( isUint16Array ( new Error () ) );
    t.false ( isUint16Array ( [].slice ) );
    t.false ( isUint16Array ( { 'a': 1 } ) );
    t.false ( isUint16Array ( 1 ) );
    t.false ( isUint16Array ( /x/ ) );
    t.false ( isUint16Array ( 'a' ) );
    t.false ( isUint16Array ( Symbol () ) );
    t.false ( isUint16Array ( new BigInt64Array () ) );
    t.false ( isUint16Array ( new BigUint64Array () ) );
    t.false ( isUint16Array ( new Float32Array () ) );
    t.false ( isUint16Array ( new Float64Array () ) );
    t.false ( isUint16Array ( new Int8Array () ) );
    t.false ( isUint16Array ( new Int16Array () ) );
    t.false ( isUint16Array ( new Int32Array () ) );
    t.false ( isUint16Array ( new Uint8Array () ) );
    t.false ( isUint16Array ( new Uint8ClampedArray () ) );
    t.false ( isUint16Array ( new Uint32Array () ) );

  });

  test ( 'should work with Uint16Arrays from another realm', t => {

    t.true ( isUint16Array ( realm.uint16array ) );

  });

});
