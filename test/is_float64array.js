
/* IMPORT */

import {describe} from 'fava';
import {isFloat64Array} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isFloat64Array', test => {

  test ( 'should return "true" for Float64Arrays', t => {

    t.true ( isFloat64Array ( new Float64Array () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isFloat64Array () );
    t.false ( isFloat64Array ( null ) );
    t.false ( isFloat64Array ( undefined ) );
    t.false ( isFloat64Array ( false ) );
    t.false ( isFloat64Array ( 0 ) );
    t.false ( isFloat64Array ( NaN ) );
    t.false ( isFloat64Array ( '' ) );
    t.false ( isFloat64Array ( args ) );
    t.false ( isFloat64Array ( [1] ) );
    t.false ( isFloat64Array ( true ) );
    t.false ( isFloat64Array ( new Date () ) );
    t.false ( isFloat64Array ( new Error () ) );
    t.false ( isFloat64Array ( [].slice ) );
    t.false ( isFloat64Array ( { 'a': 1 } ) );
    t.false ( isFloat64Array ( 1 ) );
    t.false ( isFloat64Array ( /x/ ) );
    t.false ( isFloat64Array ( 'a' ) );
    t.false ( isFloat64Array ( Symbol () ) );
    t.false ( isFloat64Array ( new BigInt64Array () ) );
    t.false ( isFloat64Array ( new BigUint64Array () ) );
    t.false ( isFloat64Array ( new Float32Array () ) );
    t.false ( isFloat64Array ( new Int8Array () ) );
    t.false ( isFloat64Array ( new Int16Array () ) );
    t.false ( isFloat64Array ( new Int32Array () ) );
    t.false ( isFloat64Array ( new Uint8Array () ) );
    t.false ( isFloat64Array ( new Uint8ClampedArray () ) );
    t.false ( isFloat64Array ( new Uint16Array () ) );
    t.false ( isFloat64Array ( new Uint32Array () ) );

  });

  test ( 'should work with Float64Arrays from another realm', t => {

    t.true ( isFloat64Array ( realm.float64array ) );

  });

});
