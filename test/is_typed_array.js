
/* IMPORT */

import {describe} from 'fava';
import {isTypedArray} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isTypedArray', test => {

  test ( 'should return "true" for typed arrays', t => {

    t.true ( isTypedArray ( new Int8Array () ) );
    t.true ( isTypedArray ( new Uint8Array () ) );
    t.true ( isTypedArray ( new Uint8ClampedArray () ) );
    t.true ( isTypedArray ( new Int16Array () ) );
    t.true ( isTypedArray ( new Uint16Array () ) );
    t.true ( isTypedArray ( new Int32Array () ) );
    t.true ( isTypedArray ( new Uint32Array () ) );
    t.true ( isTypedArray ( new Float32Array () ) );
    t.true ( isTypedArray ( new Float64Array () ) );
    t.true ( isTypedArray ( new BigInt64Array () ) );
    t.true ( isTypedArray ( new BigUint64Array () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isTypedArray () );
    t.false ( isTypedArray ( null ) );
    t.false ( isTypedArray ( undefined ) );
    t.false ( isTypedArray ( false ) );
    t.false ( isTypedArray ( 0 ) );
    t.false ( isTypedArray ( NaN ) );
    t.false ( isTypedArray ( '' ) );
    t.false ( isTypedArray ( args ) );
    t.false ( isTypedArray ( [1] ) );
    t.false ( isTypedArray ( true ) );
    t.false ( isTypedArray ( new Date () ) );
    t.false ( isTypedArray ( new Error () ) );
    t.false ( isTypedArray ( [].slice ) );
    t.false ( isTypedArray ( { 'a': 1 } ) );
    t.false ( isTypedArray ( 1 ) );
    t.false ( isTypedArray ( /x/ ) );
    t.false ( isTypedArray ( 'a' ) );
    t.false ( isTypedArray ( Symbol () ) );

  });

  test ( 'should work with maps from another realm', t => {

    t.true ( isTypedArray ( realm.float32array ) );
    t.true ( isTypedArray ( realm.float64array ) );
    t.true ( isTypedArray ( realm.int8array ) );
    t.true ( isTypedArray ( realm.int16array ) );
    t.true ( isTypedArray ( realm.int32array ) );
    t.true ( isTypedArray ( realm.uint8array ) );
    t.true ( isTypedArray ( realm.uint8clampedarray ) );
    t.true ( isTypedArray ( realm.uint16array ) );
    t.true ( isTypedArray ( realm.uint32array ) );

  });

});
