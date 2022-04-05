
/* IMPORT */

import {describe} from 'fava';
import {isBigInt64Array} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isBigInt64Array', test => {

  test ( 'should return "true" for BigInt64Arrays', t => {

    t.true ( isBigInt64Array ( new BigInt64Array () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBigInt64Array () );
    t.false ( isBigInt64Array ( null ) );
    t.false ( isBigInt64Array ( undefined ) );
    t.false ( isBigInt64Array ( false ) );
    t.false ( isBigInt64Array ( 0 ) );
    t.false ( isBigInt64Array ( NaN ) );
    t.false ( isBigInt64Array ( '' ) );
    t.false ( isBigInt64Array ( args ) );
    t.false ( isBigInt64Array ( [1] ) );
    t.false ( isBigInt64Array ( true ) );
    t.false ( isBigInt64Array ( new Date () ) );
    t.false ( isBigInt64Array ( new Error () ) );
    t.false ( isBigInt64Array ( [].slice ) );
    t.false ( isBigInt64Array ( { 'a': 1 } ) );
    t.false ( isBigInt64Array ( 1 ) );
    t.false ( isBigInt64Array ( /x/ ) );
    t.false ( isBigInt64Array ( 'a' ) );
    t.false ( isBigInt64Array ( Symbol () ) );
    t.false ( isBigInt64Array ( new BigUint64Array () ) );
    t.false ( isBigInt64Array ( new Float32Array () ) );
    t.false ( isBigInt64Array ( new Float64Array () ) );
    t.false ( isBigInt64Array ( new Int8Array () ) );
    t.false ( isBigInt64Array ( new Int16Array () ) );
    t.false ( isBigInt64Array ( new Int32Array () ) );
    t.false ( isBigInt64Array ( new Uint8Array () ) );
    t.false ( isBigInt64Array ( new Uint8ClampedArray () ) );
    t.false ( isBigInt64Array ( new Uint16Array () ) );
    t.false ( isBigInt64Array ( new Uint32Array () ) );

  });

  test ( 'should work with BigInt64Arrays from another realm', t => {

    t.true ( isBigInt64Array ( realm.bigint64array ) );

  });

});
