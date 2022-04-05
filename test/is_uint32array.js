
/* IMPORT */

import {describe} from 'fava';
import {isUint32Array} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isUint32Array', test => {

  test ( 'should return "true" for Uint32Arrays', t => {

    t.true ( isUint32Array ( new Uint32Array () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isUint32Array () );
    t.false ( isUint32Array ( null ) );
    t.false ( isUint32Array ( undefined ) );
    t.false ( isUint32Array ( false ) );
    t.false ( isUint32Array ( 0 ) );
    t.false ( isUint32Array ( NaN ) );
    t.false ( isUint32Array ( '' ) );
    t.false ( isUint32Array ( args ) );
    t.false ( isUint32Array ( [1] ) );
    t.false ( isUint32Array ( true ) );
    t.false ( isUint32Array ( new Date () ) );
    t.false ( isUint32Array ( new Error () ) );
    t.false ( isUint32Array ( [].slice ) );
    t.false ( isUint32Array ( { 'a': 1 } ) );
    t.false ( isUint32Array ( 1 ) );
    t.false ( isUint32Array ( /x/ ) );
    t.false ( isUint32Array ( 'a' ) );
    t.false ( isUint32Array ( Symbol () ) );
    t.false ( isUint32Array ( new BigInt64Array () ) );
    t.false ( isUint32Array ( new BigUint64Array () ) );
    t.false ( isUint32Array ( new Float32Array () ) );
    t.false ( isUint32Array ( new Float64Array () ) );
    t.false ( isUint32Array ( new Int8Array () ) );
    t.false ( isUint32Array ( new Int16Array () ) );
    t.false ( isUint32Array ( new Int32Array () ) );
    t.false ( isUint32Array ( new Uint8Array () ) );
    t.false ( isUint32Array ( new Uint8ClampedArray () ) );
    t.false ( isUint32Array ( new Uint16Array () ) );

  });

  test ( 'should work with Uint32Arrays from another realm', t => {

    t.true ( isUint32Array ( realm.uint32array ) );

  });

});
