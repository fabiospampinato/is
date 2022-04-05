
/* IMPORT */

import {describe} from 'fava';
import {isInt16Array} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isInt16Array', test => {

  test ( 'should return "true" for Int16Arrays', t => {

    t.true ( isInt16Array ( new Int16Array () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isInt16Array () );
    t.false ( isInt16Array ( null ) );
    t.false ( isInt16Array ( undefined ) );
    t.false ( isInt16Array ( false ) );
    t.false ( isInt16Array ( 0 ) );
    t.false ( isInt16Array ( NaN ) );
    t.false ( isInt16Array ( '' ) );
    t.false ( isInt16Array ( args ) );
    t.false ( isInt16Array ( [1] ) );
    t.false ( isInt16Array ( true ) );
    t.false ( isInt16Array ( new Date () ) );
    t.false ( isInt16Array ( new Error () ) );
    t.false ( isInt16Array ( [].slice ) );
    t.false ( isInt16Array ( { 'a': 1 } ) );
    t.false ( isInt16Array ( 1 ) );
    t.false ( isInt16Array ( /x/ ) );
    t.false ( isInt16Array ( 'a' ) );
    t.false ( isInt16Array ( Symbol () ) );
    t.false ( isInt16Array ( new BigInt64Array () ) );
    t.false ( isInt16Array ( new BigUint64Array () ) );
    t.false ( isInt16Array ( new Float32Array () ) );
    t.false ( isInt16Array ( new Float64Array () ) );
    t.false ( isInt16Array ( new Int8Array () ) );
    t.false ( isInt16Array ( new Int32Array () ) );
    t.false ( isInt16Array ( new Uint8Array () ) );
    t.false ( isInt16Array ( new Uint8ClampedArray () ) );
    t.false ( isInt16Array ( new Uint16Array () ) );
    t.false ( isInt16Array ( new Uint32Array () ) );

  });

  test ( 'should work with Int16Arrays from another realm', t => {

    t.true ( isInt16Array ( realm.int16array ) );

  });

});
