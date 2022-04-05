
/* IMPORT */

import {describe} from 'fava';
import {isBoolean} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isBoolean', test => {

  test ( 'should return "true" for booleans', t => {

    t.true ( isBoolean ( true ) );
    t.true ( isBoolean ( false ) );
    t.true ( isBoolean ( Object ( true ) ) );
    t.true ( isBoolean ( Object ( false ) ) );
    t.true ( isBoolean ( new Boolean ( true ) ) );
    t.true ( isBoolean ( new Boolean ( false ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBoolean () );
    t.false ( isBoolean ( null ) );
    t.false ( isBoolean ( undefined ) );
    t.false ( isBoolean ( 0 ) );
    t.false ( isBoolean ( NaN ) );
    t.false ( isBoolean ( '' ) );
    t.false ( isBoolean ( args ) );
    t.false ( isBoolean ( [1] ) );
    t.false ( isBoolean ( new Date () ) );
    t.false ( isBoolean ( new Error () ) );
    t.false ( isBoolean ( [].slice ) );
    t.false ( isBoolean ( { 'a': 1 } ) );
    t.false ( isBoolean ( 1 ) );
    t.false ( isBoolean ( /x/ ) );
    t.false ( isBoolean ( 'a' ) );
    t.false ( isBoolean ( Symbol () ) );

  });

  test ( 'should work with booleans from another realm', t => {

    t.true ( isBoolean ( realm.boolean ) );

  });

});
