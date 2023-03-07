
/* IMPORT */

import {describe} from 'fava';
import {isFrozen} from '../dist/index.js';
import {args} from './_utils.js';

/* MAIN */

describe ( 'isFrozen', test => {

  test ( 'should return "true" for frozen objects, and primitives', t => {

    t.true ( isFrozen ( Object.freeze ( {} ) ) );
    t.true ( isFrozen ( Object.freeze ( { foo: true } ) ) );
    t.true ( isFrozen ( Object.seal ( {} ) ) );

    t.true ( isFrozen () );
    t.true ( isFrozen ( null ) );
    t.true ( isFrozen ( undefined ) );
    t.true ( isFrozen ( false ) );
    t.true ( isFrozen ( true ) );
    t.true ( isFrozen ( 0 ) );
    t.true ( isFrozen ( '' ) );
    t.true ( isFrozen ( 1 ) );
    t.true ( isFrozen ( 1n ) );
    t.true ( isFrozen ( 'a' ) );
    t.true ( isFrozen ( Symbol () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isFrozen ( args ) );
    t.false ( isFrozen ( [1] ) );
    t.false ( isFrozen ( new Date () ) );
    t.false ( isFrozen ( new Error () ) );
    t.false ( isFrozen ( [].slice ) );
    t.false ( isFrozen ( { 'a': 1 } ) );
    t.false ( isFrozen ( /x/ ) );
    t.false ( isFrozen ( Object.seal ( { foo: true } ) ) );

  });

});
