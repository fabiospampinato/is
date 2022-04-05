
/* IMPORT */

import {describe} from 'fava';
import {isPlainObject} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isPlainObject', test => {

  test ( 'should return "true" for objects', t => {

    t.true ( isPlainObject ( {} ) );
    t.true ( isPlainObject ( Object.create ( null ) ) );
    t.true ( isPlainObject ( { x: 0, y: 0 } ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isPlainObject () );
    t.false ( isPlainObject ( null ) );
    t.false ( isPlainObject ( undefined ) );
    t.false ( isPlainObject ( false ) );
    t.false ( isPlainObject ( 0 ) );
    t.false ( isPlainObject ( NaN ) );
    t.false ( isPlainObject ( '' ) );
    t.false ( isPlainObject ( args ) );
    t.false ( isPlainObject ( [1] ) );
    t.false ( isPlainObject ( true ) );
    t.false ( isPlainObject ( new Date () ) );
    t.false ( isPlainObject ( new Error () ) );
    t.false ( isPlainObject ( [].slice ) );
    t.false ( isPlainObject ( 1 ) );
    t.false ( isPlainObject ( /x/ ) );
    t.false ( isPlainObject ( 'a' ) );
    t.false ( isPlainObject ( Symbol () ) );

  });

  test ( 'should work with objects from another realm', t => {

    t.true ( isPlainObject ( realm.object ) );

  });

});
