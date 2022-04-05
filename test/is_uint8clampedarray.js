
/* IMPORT */

import {describe} from 'fava';
import {isUint8ClampedArray} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isUint8ClampedArray', test => {

  test ( 'should return "true" for Uint8ClampedArrays', t => {

    t.true ( isUint8ClampedArray ( new Uint8ClampedArray () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isUint8ClampedArray () );
    t.false ( isUint8ClampedArray ( null ) );
    t.false ( isUint8ClampedArray ( undefined ) );
    t.false ( isUint8ClampedArray ( false ) );
    t.false ( isUint8ClampedArray ( 0 ) );
    t.false ( isUint8ClampedArray ( NaN ) );
    t.false ( isUint8ClampedArray ( '' ) );
    t.false ( isUint8ClampedArray ( args ) );
    t.false ( isUint8ClampedArray ( [1] ) );
    t.false ( isUint8ClampedArray ( true ) );
    t.false ( isUint8ClampedArray ( new Date () ) );
    t.false ( isUint8ClampedArray ( new Error () ) );
    t.false ( isUint8ClampedArray ( [].slice ) );
    t.false ( isUint8ClampedArray ( { 'a': 1 } ) );
    t.false ( isUint8ClampedArray ( 1 ) );
    t.false ( isUint8ClampedArray ( /x/ ) );
    t.false ( isUint8ClampedArray ( 'a' ) );
    t.false ( isUint8ClampedArray ( Symbol () ) );
    t.false ( isUint8ClampedArray ( new BigInt64Array () ) );
    t.false ( isUint8ClampedArray ( new BigUint64Array () ) );
    t.false ( isUint8ClampedArray ( new Float32Array () ) );
    t.false ( isUint8ClampedArray ( new Float64Array () ) );
    t.false ( isUint8ClampedArray ( new Int8Array () ) );
    t.false ( isUint8ClampedArray ( new Int16Array () ) );
    t.false ( isUint8ClampedArray ( new Int32Array () ) );
    t.false ( isUint8ClampedArray ( new Uint8Array () ) );
    t.false ( isUint8ClampedArray ( new Uint16Array () ) );
    t.false ( isUint8ClampedArray ( new Uint32Array () ) );

  });

  test ( 'should work with Uint8ClampedArrays from another realm', t => {

    t.true ( isUint8ClampedArray ( realm.uint8clampedarray ) );

  });

});
