
/* IMPORT */

import {describe} from 'fava';
import {isBoxedBoolean} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isBoxedBoolean', test => {

  test ( 'should return "true" for boxed booleans', t => {

    t.true ( isBoxedBoolean ( Object ( true ) ) );
    t.true ( isBoxedBoolean ( Object ( false ) ) );
    t.true ( isBoxedBoolean ( new Boolean ( true ) ) );
    t.true ( isBoxedBoolean ( new Boolean ( false ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBoxedBoolean () );
    t.false ( isBoxedBoolean ( null ) );
    t.false ( isBoxedBoolean ( undefined ) );
    t.false ( isBoxedBoolean ( 0 ) );
    t.false ( isBoxedBoolean ( NaN ) );
    t.false ( isBoxedBoolean ( '' ) );
    t.false ( isBoxedBoolean ( args ) );
    t.false ( isBoxedBoolean ( [1] ) );
    t.false ( isBoxedBoolean ( new Date () ) );
    t.false ( isBoxedBoolean ( new Error () ) );
    t.false ( isBoxedBoolean ( [].slice ) );
    t.false ( isBoxedBoolean ( { 'a': 1 } ) );
    t.false ( isBoxedBoolean ( 1 ) );
    t.false ( isBoxedBoolean ( /x/ ) );
    t.false ( isBoxedBoolean ( 'a' ) );
    t.false ( isBoxedBoolean ( Symbol () ) );
    t.false ( isBoxedBoolean ( true ) );
    t.false ( isBoxedBoolean ( false ) );

  });

  test ( 'should work with boxed booleans from another realm', t => {

    t.true ( isBoxedBoolean ( realm.boxedTrue ) );
    t.true ( isBoxedBoolean ( realm.boxedFalse ) );
    t.false ( isBoxedBoolean ( realm.unboxedTrue ) );
    t.false ( isBoxedBoolean ( realm.unboxedFalse ) );

  });

});
