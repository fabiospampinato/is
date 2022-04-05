
/* IMPORT */

import {describe} from 'fava';
import {isUint8Array} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isUint8Array', test => {

  test ( 'should return "true" for Uint8Arrays', t => {

    t.true ( isUint8Array ( new Uint8Array () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isUint8Array () );
    t.false ( isUint8Array ( null ) );
    t.false ( isUint8Array ( undefined ) );
    t.false ( isUint8Array ( false ) );
    t.false ( isUint8Array ( 0 ) );
    t.false ( isUint8Array ( NaN ) );
    t.false ( isUint8Array ( '' ) );
    t.false ( isUint8Array ( args ) );
    t.false ( isUint8Array ( [1] ) );
    t.false ( isUint8Array ( true ) );
    t.false ( isUint8Array ( new Date () ) );
    t.false ( isUint8Array ( new Error () ) );
    t.false ( isUint8Array ( [].slice ) );
    t.false ( isUint8Array ( { 'a': 1 } ) );
    t.false ( isUint8Array ( 1 ) );
    t.false ( isUint8Array ( /x/ ) );
    t.false ( isUint8Array ( 'a' ) );
    t.false ( isUint8Array ( Symbol () ) );
    t.false ( isUint8Array ( new BigInt64Array () ) );
    t.false ( isUint8Array ( new BigUint64Array () ) );
    t.false ( isUint8Array ( new Float32Array () ) );
    t.false ( isUint8Array ( new Float64Array () ) );
    t.false ( isUint8Array ( new Int8Array () ) );
    t.false ( isUint8Array ( new Int16Array () ) );
    t.false ( isUint8Array ( new Int32Array () ) );
    t.false ( isUint8Array ( new Uint8ClampedArray () ) );
    t.false ( isUint8Array ( new Uint16Array () ) );
    t.false ( isUint8Array ( new Uint32Array () ) );

  });

  test ( 'should work with Uint8Arrays from another realm', t => {

    t.true ( isUint8Array ( realm.uint8array ) );

  });

});
