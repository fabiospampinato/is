
/* IMPORT */

import {describe} from 'fava';
import {isBigUint64Array} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isBigUint64Array', test => {

  test ( 'should return "true" for BigUint64Arrays', t => {

    t.true ( isBigUint64Array ( new BigUint64Array () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBigUint64Array () );
    t.false ( isBigUint64Array ( null ) );
    t.false ( isBigUint64Array ( undefined ) );
    t.false ( isBigUint64Array ( false ) );
    t.false ( isBigUint64Array ( 0 ) );
    t.false ( isBigUint64Array ( NaN ) );
    t.false ( isBigUint64Array ( '' ) );
    t.false ( isBigUint64Array ( args ) );
    t.false ( isBigUint64Array ( [1] ) );
    t.false ( isBigUint64Array ( true ) );
    t.false ( isBigUint64Array ( new Date () ) );
    t.false ( isBigUint64Array ( new Error () ) );
    t.false ( isBigUint64Array ( [].slice ) );
    t.false ( isBigUint64Array ( { 'a': 1 } ) );
    t.false ( isBigUint64Array ( 1 ) );
    t.false ( isBigUint64Array ( /x/ ) );
    t.false ( isBigUint64Array ( 'a' ) );
    t.false ( isBigUint64Array ( Symbol () ) );
    t.false ( isBigUint64Array ( new BigInt64Array () ) );
    t.false ( isBigUint64Array ( new Float32Array () ) );
    t.false ( isBigUint64Array ( new Float64Array () ) );
    t.false ( isBigUint64Array ( new Int8Array () ) );
    t.false ( isBigUint64Array ( new Int16Array () ) );
    t.false ( isBigUint64Array ( new Int32Array () ) );
    t.false ( isBigUint64Array ( new Uint8Array () ) );
    t.false ( isBigUint64Array ( new Uint8ClampedArray () ) );
    t.false ( isBigUint64Array ( new Uint16Array () ) );
    t.false ( isBigUint64Array ( new Uint32Array () ) );

  });

  test ( 'should work with BigUint64Arrays from another realm', t => {

    t.true ( isBigUint64Array ( realm.biguint64array ) );

  });

});
