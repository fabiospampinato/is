
/* IMPORT */

import {describe} from 'fava';
import {isFloat32Array} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isFloat32Array', test => {

  test ( 'should return "true" for Float32Arrays', t => {

    t.true ( isFloat32Array ( new Float32Array () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isFloat32Array () );
    t.false ( isFloat32Array ( null ) );
    t.false ( isFloat32Array ( undefined ) );
    t.false ( isFloat32Array ( false ) );
    t.false ( isFloat32Array ( 0 ) );
    t.false ( isFloat32Array ( NaN ) );
    t.false ( isFloat32Array ( '' ) );
    t.false ( isFloat32Array ( args ) );
    t.false ( isFloat32Array ( [1] ) );
    t.false ( isFloat32Array ( true ) );
    t.false ( isFloat32Array ( new Date () ) );
    t.false ( isFloat32Array ( new Error () ) );
    t.false ( isFloat32Array ( [].slice ) );
    t.false ( isFloat32Array ( { 'a': 1 } ) );
    t.false ( isFloat32Array ( 1 ) );
    t.false ( isFloat32Array ( /x/ ) );
    t.false ( isFloat32Array ( 'a' ) );
    t.false ( isFloat32Array ( Symbol () ) );
    t.false ( isFloat32Array ( new BigInt64Array () ) );
    t.false ( isFloat32Array ( new BigUint64Array () ) );
    t.false ( isFloat32Array ( new Float64Array () ) );
    t.false ( isFloat32Array ( new Int8Array () ) );
    t.false ( isFloat32Array ( new Int16Array () ) );
    t.false ( isFloat32Array ( new Int32Array () ) );
    t.false ( isFloat32Array ( new Uint8Array () ) );
    t.false ( isFloat32Array ( new Uint8ClampedArray () ) );
    t.false ( isFloat32Array ( new Uint16Array () ) );
    t.false ( isFloat32Array ( new Uint32Array () ) );

  });

  test ( 'should work with Float32Arrays from another realm', t => {

    t.true ( isFloat32Array ( realm.float32array ) );

  });

});
