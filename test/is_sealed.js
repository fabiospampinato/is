
/* IMPORT */

import {describe} from 'fava';
import {isSealed} from '../dist/index.js';
import {args} from './_utils.js';

/* MAIN */

describe ( 'isSealed', test => {

  test ( 'should return "true" for sealed objects, and primitives', t => {

    t.true ( isSealed ( Object.seal ( {} ) ) );
    t.true ( isSealed ( Object.seal ( { foo: true } ) ) );
    t.true ( isSealed ( Object.freeze ( {} ) ) );
    t.true ( isSealed ( Object.freeze ( { foo: true } ) ) );

    t.true ( isSealed () );
    t.true ( isSealed ( null ) );
    t.true ( isSealed ( undefined ) );
    t.true ( isSealed ( false ) );
    t.true ( isSealed ( true ) );
    t.true ( isSealed ( 0 ) );
    t.true ( isSealed ( '' ) );
    t.true ( isSealed ( 1 ) );
    t.true ( isSealed ( 1n ) );
    t.true ( isSealed ( 'a' ) );
    t.true ( isSealed ( Symbol () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isSealed ( args ) );
    t.false ( isSealed ( [1] ) );
    t.false ( isSealed ( new Date () ) );
    t.false ( isSealed ( new Error () ) );
    t.false ( isSealed ( [].slice ) );
    t.false ( isSealed ( { 'a': 1 } ) );
    t.false ( isSealed ( /x/ ) );

  });

});
