
/* IMPORT */

import {describe} from 'fava';
import {isSharedArrayBuffer} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isSharedArrayBuffer', test => {

  test ( 'should return "true" for shared array buffers', t => {

    t.true ( isSharedArrayBuffer ( new SharedArrayBuffer ( 2 ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isSharedArrayBuffer () );
    t.false ( isSharedArrayBuffer ( null ) );
    t.false ( isSharedArrayBuffer ( undefined ) );
    t.false ( isSharedArrayBuffer ( false ) );
    t.false ( isSharedArrayBuffer ( 0 ) );
    t.false ( isSharedArrayBuffer ( NaN ) );
    t.false ( isSharedArrayBuffer ( '' ) );
    t.false ( isSharedArrayBuffer ( args ) );
    t.false ( isSharedArrayBuffer ( [1] ) );
    t.false ( isSharedArrayBuffer ( true ) );
    t.false ( isSharedArrayBuffer ( new Date () ) );
    t.false ( isSharedArrayBuffer ( new Error () ) );
    t.false ( isSharedArrayBuffer ( [].slice ) );
    t.false ( isSharedArrayBuffer ( { 'a': 1 } ) );
    t.false ( isSharedArrayBuffer ( 1 ) );
    t.false ( isSharedArrayBuffer ( /x/ ) );
    t.false ( isSharedArrayBuffer ( 'a' ) );
    t.false ( isSharedArrayBuffer ( Symbol () ) );
    t.false ( isSharedArrayBuffer ( { byteLength: 1 } ) );
    t.false ( isSharedArrayBuffer ( new ArrayBuffer ( 2 ) ) );

  });

  test ( 'should work with shared array buffers from another realm', t => {

    t.true ( isSharedArrayBuffer ( realm.sharedArrayBuffer ) );

  });

});
