
/* IMPORT */

import {describe} from 'fava';
import {isObject} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isObject', test => {

  test ( 'should return "true" for objects', t => {

    t.true ( isObject ( args ) );
    t.true ( isObject ( [1, 2, 3] ) );
    t.true ( isObject ( Object ( false ) ) );
    t.true ( isObject ( new Date () ) );
    t.true ( isObject ( new Error () ) );
    t.true ( isObject ( [].slice ) );
    t.true ( isObject ( { 'a': 1 } ) );
    t.true ( isObject ( Object ( 0 ) ) );
    t.true ( isObject ( /x/ ) );
    t.true ( isObject ( Object ( 'a' ) ) );
    t.true ( isObject ( Object ( Symbol () ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isObject () );
    t.false ( isObject ( null ) );
    t.false ( isObject ( undefined ) );
    t.false ( isObject ( false ) );
    t.false ( isObject ( 0 ) );
    t.false ( isObject ( NaN ) );
    t.false ( isObject ( '' ) );
    t.false ( isObject ( true ) );
    t.false ( isObject ( 1 ) );
    t.false ( isObject ( 'a' ) );
    t.false ( isObject ( Symbol () ) );

  });

  test ( 'should work with objects from another realm', t => {

    t.true ( isObject ( realm.boolean ) );
    t.true ( isObject ( realm.date ) );
    t.true ( isObject ( realm.function ) );
    t.true ( isObject ( realm.number ) );
    t.true ( isObject ( realm.object ) );
    t.true ( isObject ( realm.regexp ) );
    t.true ( isObject ( realm.string ) );

  });

});
