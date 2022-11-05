
/* IMPORT */

import {describe} from 'fava';
import {isBoxedNumber} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isBoxedNumber', test => {

  test ( 'should return "true" for boxed numbers', t => {

    t.true ( isBoxedNumber ( Object ( 0 ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBoxedNumber () );
    t.false ( isBoxedNumber ( null ) );
    t.false ( isBoxedNumber ( undefined ) );
    t.false ( isBoxedNumber ( '' ) );
    t.false ( isBoxedNumber ( args ) );
    t.false ( isBoxedNumber ( [1] ) );
    t.false ( isBoxedNumber ( new Error () ) );
    t.false ( isBoxedNumber ( [].slice ) );
    t.false ( isBoxedNumber ( { 'a': 1 } ) );
    t.false ( isBoxedNumber ( /x/ ) );
    t.false ( isBoxedNumber ( 'a' ) );
    t.false ( isBoxedNumber ( Symbol () ) );
    t.false ( isBoxedNumber ( -100 ) );
    t.false ( isBoxedNumber ( 0 ) );
    t.false ( isBoxedNumber ( 100 ) );
    t.false ( isBoxedNumber ( -Infinity ) );
    t.false ( isBoxedNumber ( Infinity ) );
    t.false ( isBoxedNumber ( NaN ) );

  });

  test ( 'should work with boxed numbers from another realm', t => {

    t.true ( isBoxedNumber ( realm.boxedNumber ) );
    t.false ( isBoxedNumber ( realm.unboxedNumber ) );

  });

});
