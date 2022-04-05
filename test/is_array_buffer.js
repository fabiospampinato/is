
/* IMPORT */

import {describe} from 'fava';
import {isArrayBuffer} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isArrayBuffer', test => {

  test ( 'should return "true" for array buffers', t => {

    t.true ( isArrayBuffer ( new ArrayBuffer ( 2 ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isArrayBuffer () );
    t.false ( isArrayBuffer ( null ) );
    t.false ( isArrayBuffer ( undefined ) );
    t.false ( isArrayBuffer ( false ) );
    t.false ( isArrayBuffer ( 0 ) );
    t.false ( isArrayBuffer ( NaN ) );
    t.false ( isArrayBuffer ( '' ) );
    t.false ( isArrayBuffer ( args ) );
    t.false ( isArrayBuffer ( [1] ) );
    t.false ( isArrayBuffer ( true ) );
    t.false ( isArrayBuffer ( new Date () ) );
    t.false ( isArrayBuffer ( new Error () ) );
    t.false ( isArrayBuffer ( [].slice ) );
    t.false ( isArrayBuffer ( { 'a': 1 } ) );
    t.false ( isArrayBuffer ( 1 ) );
    t.false ( isArrayBuffer ( /x/ ) );
    t.false ( isArrayBuffer ( 'a' ) );
    t.false ( isArrayBuffer ( Symbol () ) );
    t.false ( isArrayBuffer ( { byteLength: 1 } ) );
    t.false ( isArrayBuffer ( new SharedArrayBuffer ( 2 ) ) );

  });

  test ( 'should work with array buffers from another realm', t => {

    t.true ( isArrayBuffer ( realm.arrayBuffer ) );

  });

});
