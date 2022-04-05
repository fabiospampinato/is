
/* IMPORT */

import {describe} from 'fava';
import {isInt8Array} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isInt8Array', test => {

  test ( 'should return "true" for Int8Arrays', t => {

    t.true ( isInt8Array ( new Int8Array () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isInt8Array () );
    t.false ( isInt8Array ( null ) );
    t.false ( isInt8Array ( undefined ) );
    t.false ( isInt8Array ( false ) );
    t.false ( isInt8Array ( 0 ) );
    t.false ( isInt8Array ( NaN ) );
    t.false ( isInt8Array ( '' ) );
    t.false ( isInt8Array ( args ) );
    t.false ( isInt8Array ( [1] ) );
    t.false ( isInt8Array ( true ) );
    t.false ( isInt8Array ( new Date () ) );
    t.false ( isInt8Array ( new Error () ) );
    t.false ( isInt8Array ( [].slice ) );
    t.false ( isInt8Array ( { 'a': 1 } ) );
    t.false ( isInt8Array ( 1 ) );
    t.false ( isInt8Array ( /x/ ) );
    t.false ( isInt8Array ( 'a' ) );
    t.false ( isInt8Array ( Symbol () ) );
    t.false ( isInt8Array ( new BigInt64Array () ) );
    t.false ( isInt8Array ( new BigUint64Array () ) );
    t.false ( isInt8Array ( new Float32Array () ) );
    t.false ( isInt8Array ( new Float64Array () ) );
    t.false ( isInt8Array ( new Int16Array () ) );
    t.false ( isInt8Array ( new Int32Array () ) );
    t.false ( isInt8Array ( new Uint8Array () ) );
    t.false ( isInt8Array ( new Uint8ClampedArray () ) );
    t.false ( isInt8Array ( new Uint16Array () ) );
    t.false ( isInt8Array ( new Uint32Array () ) );

  });

  test ( 'should work with Int8Arrays from another realm', t => {

    t.true ( isInt8Array ( realm.int8array ) );

  });

});
