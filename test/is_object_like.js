
/* IMPORT */

import {describe} from 'fava';
import {isObjectLike} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isObjectLike', test => {

  test ( 'should return "true" for objects', t => {

    t.true ( isObjectLike ( args ) );
    t.true ( isObjectLike ( [1, 2, 3] ) );
    t.true ( isObjectLike ( Object ( false ) ) );
    t.true ( isObjectLike ( new Date () ) );
    t.true ( isObjectLike ( new Error () ) );
    t.true ( isObjectLike ( { 'a': 1 } ) );
    t.true ( isObjectLike ( Object ( 0 ) ) );
    t.true ( isObjectLike ( /x/ ) );
    t.true ( isObjectLike ( Object ( 'a' ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isObjectLike () );
    t.false ( isObjectLike ( null ) );
    t.false ( isObjectLike ( undefined ) );
    t.false ( isObjectLike ( false ) );
    t.false ( isObjectLike ( 0 ) );
    t.false ( isObjectLike ( NaN ) );
    t.false ( isObjectLike ( '' ) );
    t.false ( isObjectLike ( true ) );
    t.false ( isObjectLike ( [].slice ) );
    t.false ( isObjectLike ( 1 ) );
    t.false ( isObjectLike ( 'a' ) );
    t.false ( isObjectLike ( Symbol () ) );

  });

  test ( 'should work with objects from another realm', t => {

    t.true ( isObjectLike ( realm.boolean ) );
    t.true ( isObjectLike ( realm.date ) );
    t.true ( isObjectLike ( realm.number ) );
    t.true ( isObjectLike ( realm.object ) );
    t.true ( isObjectLike ( realm.regexp ) );
    t.true ( isObjectLike ( realm.string ) );

  });

});
