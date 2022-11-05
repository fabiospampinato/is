
/* IMPORT */

import {describe} from 'fava';
import {isBoxedPrimitive} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isBoxedPrimitive', test => {

  test ( 'should return "true" for boxed primitives', t => {

    t.true ( isBoxedPrimitive ( Object ( 123n ) ) );
    t.true ( isBoxedPrimitive ( Object ( true ) ) );
    t.true ( isBoxedPrimitive ( Object ( false ) ) );
    t.true ( isBoxedPrimitive ( Object ( 123 ) ) );
    t.true ( isBoxedPrimitive ( Object ( 'foo' ) ) );
    t.true ( isBoxedPrimitive ( Object ( Symbol () ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBoxedPrimitive ( args ) );
    t.false ( isBoxedPrimitive ( [1] ) );
    t.false ( isBoxedPrimitive ( new Date () ) );
    t.false ( isBoxedPrimitive ( new Error () ) );
    t.false ( isBoxedPrimitive ( [].slice ) );
    t.false ( isBoxedPrimitive ( { 'a': 1 } ) );
    t.false ( isBoxedPrimitive ( /x/ ) );
    t.false ( isBoxedPrimitive () );
    t.false ( isBoxedPrimitive ( null ) );
    t.false ( isBoxedPrimitive ( undefined ) );
    t.false ( isBoxedPrimitive ( '' ) );
    t.false ( isBoxedPrimitive ( 0 ) );
    t.false ( isBoxedPrimitive ( Infinity ) );
    t.false ( isBoxedPrimitive ( NaN ) );
    t.false ( isBoxedPrimitive ( true ) );
    t.false ( isBoxedPrimitive ( false ) );
    t.false ( isBoxedPrimitive ( Symbol () ) );
    t.false ( isBoxedPrimitive ( 0n ) );

  });

  test ( 'should work with boxed primitives from another realm', t => {

    t.true ( isBoxedPrimitive ( realm.boxedBigint ) );
    t.true ( isBoxedPrimitive ( realm.boxedTrue ) );
    t.true ( isBoxedPrimitive ( realm.boxedFalse ) );
    t.true ( isBoxedPrimitive ( realm.boxedNumber ) );
    t.true ( isBoxedPrimitive ( realm.boxedString ) );
    t.true ( isBoxedPrimitive ( realm.boxedSymbol ) );

    t.false ( isBoxedPrimitive ( realm.unboxedBigint ) );
    t.false ( isBoxedPrimitive ( realm.unboxedTrue ) );
    t.false ( isBoxedPrimitive ( realm.unboxedFalse ) );
    t.false ( isBoxedPrimitive ( realm.unboxedNumber ) );
    t.false ( isBoxedPrimitive ( realm.unboxedString ) );
    t.false ( isBoxedPrimitive ( realm.unboxedSymbol ) );

  });

});
