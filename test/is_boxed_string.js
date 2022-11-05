
/* IMPORT */

import {describe} from 'fava';
import {isBoxedString} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isBoxedString', test => {

  test ( 'should return "true" for boxed strings', t => {

    t.true ( isBoxedString ( Object ( '' ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBoxedString () );
    t.false ( isBoxedString ( null ) );
    t.false ( isBoxedString ( undefined ) );
    t.false ( isBoxedString ( false ) );
    t.false ( isBoxedString ( 0 ) );
    t.false ( isBoxedString ( NaN ) );
    t.false ( isBoxedString ( args ) );
    t.false ( isBoxedString ( [1] ) );
    t.false ( isBoxedString ( true ) );
    t.false ( isBoxedString ( new Date () ) );
    t.false ( isBoxedString ( new Error () ) );
    t.false ( isBoxedString ( [].slice ) );
    t.false ( isBoxedString ( { 'a': 1 } ) );
    t.false ( isBoxedString ( 1 ) );
    t.false ( isBoxedString ( /x/ ) );
    t.false ( isBoxedString ( Symbol () ) );
    t.false ( isBoxedString ( '' ) );

  });

  test ( 'should work with boxed strings from another realm', t => {

    t.true ( isBoxedString ( realm.boxedString ) );
    t.false ( isBoxedString ( realm.unboxedString ) );

  });

});
