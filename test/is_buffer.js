
/* IMPORT */

import {describe} from 'fava';
import {isBuffer} from '../dist/index.js';
import {args} from './_utils.js';

/* MAIN */

describe ( 'isBuffer', test => {

  test ( 'should return "true" for buffers', t => {

    t.true ( isBuffer ( Buffer.from ( '' ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBuffer () );
    t.false ( isBuffer ( null ) );
    t.false ( isBuffer ( undefined ) );
    t.false ( isBuffer ( false ) );
    t.false ( isBuffer ( 0 ) );
    t.false ( isBuffer ( NaN ) );
    t.false ( isBuffer ( '' ) );
    t.false ( isBuffer ( args ) );
    t.false ( isBuffer ( [1] ) );
    t.false ( isBuffer ( new ArrayBuffer ( 2 ) ) );
    t.false ( isBuffer ( true ) );
    t.false ( isBuffer ( new Date () ) );
    t.false ( isBuffer ( new Error () ) );
    t.false ( isBuffer ( [].slice ) );
    t.false ( isBuffer ( { 'a': 1 } ) );
    t.false ( isBuffer ( 1 ) );
    t.false ( isBuffer ( /x/ ) );
    t.false ( isBuffer ( 'a' ) );
    t.false ( isBuffer ( Symbol () ) );
    t.false ( isBuffer ( new Uint8Array () ) );

  });

  test ( 'should return "false" if "Buffer" is not defined', t => {

    const {Buffer} = global;

    global.Buffer = undefined;

    t.false ( isBuffer ( Buffer.from ( '' ) ) );
    t.false ( isBuffer ( [] ) );

    global.Buffer = Buffer;

  });

});
