
/* IMPORT */

import {describe} from 'fava';
import {isPrototype} from '../dist/index.js';

/* MAIN */

describe ( 'isPrototype', test => {

  test ( 'should return "true" for prototypes', t => {

    t.true ( isPrototype ( Array.prototype ) );
    t.true ( isPrototype ( Object.prototype ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isPrototype () );
    t.false ( isPrototype ( null ) );
    t.false ( isPrototype ( undefined ) );
    t.false ( isPrototype ( false ) );
    t.false ( isPrototype ( 0 ) );
    t.false ( isPrototype ( NaN ) );
    t.false ( isPrototype ( '' ) );
    t.false ( isPrototype ( [1] ) );
    t.false ( isPrototype ( true ) );
    t.false ( isPrototype ( new Date () ) );
    t.false ( isPrototype ( new Error () ) );
    t.false ( isPrototype ( [].slice ) );
    t.false ( isPrototype ( { 'a': 1 } ) );
    t.false ( isPrototype ( 1 ) );
    t.false ( isPrototype ( /x/ ) );
    t.false ( isPrototype ( 'a' ) );
    t.false ( isPrototype ( Symbol () ) );
    t.false ( isPrototype ( () => {} ) );

  });

});
