
/* IMPORT */

import {describe} from 'fava';
import {isInt32Array} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isInt32Array', test => {

  test ( 'should return "true" for Int32Arrays', t => {

    t.true ( isInt32Array ( new Int32Array () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isInt32Array () );
    t.false ( isInt32Array ( null ) );
    t.false ( isInt32Array ( undefined ) );
    t.false ( isInt32Array ( false ) );
    t.false ( isInt32Array ( 0 ) );
    t.false ( isInt32Array ( NaN ) );
    t.false ( isInt32Array ( '' ) );
    t.false ( isInt32Array ( args ) );
    t.false ( isInt32Array ( [1] ) );
    t.false ( isInt32Array ( true ) );
    t.false ( isInt32Array ( new Date () ) );
    t.false ( isInt32Array ( new Error () ) );
    t.false ( isInt32Array ( [].slice ) );
    t.false ( isInt32Array ( { 'a': 1 } ) );
    t.false ( isInt32Array ( 1 ) );
    t.false ( isInt32Array ( /x/ ) );
    t.false ( isInt32Array ( 'a' ) );
    t.false ( isInt32Array ( Symbol () ) );
    t.false ( isInt32Array ( new BigInt64Array () ) );
    t.false ( isInt32Array ( new BigUint64Array () ) );
    t.false ( isInt32Array ( new Float32Array () ) );
    t.false ( isInt32Array ( new Float64Array () ) );
    t.false ( isInt32Array ( new Int8Array () ) );
    t.false ( isInt32Array ( new Int16Array () ) );
    t.false ( isInt32Array ( new Uint8Array () ) );
    t.false ( isInt32Array ( new Uint8ClampedArray () ) );
    t.false ( isInt32Array ( new Uint16Array () ) );
    t.false ( isInt32Array ( new Uint32Array () ) );

  });

  test ( 'should work with Int32Arrays from another realm', t => {

    t.true ( isInt32Array ( realm.int32array ) );

  });

});
