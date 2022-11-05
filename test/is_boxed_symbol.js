
/* IMPORT */

import {describe} from 'fava';
import {isBoxedSymbol} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isBoxedSymbol', test => {

  test ( 'should return "true" for boxed symbols', t => {

    t.true ( isBoxedSymbol ( Object ( Symbol () ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBoxedSymbol () );
    t.false ( isBoxedSymbol ( null ) );
    t.false ( isBoxedSymbol ( undefined ) );
    t.false ( isBoxedSymbol ( 0 ) );
    t.false ( isBoxedSymbol ( NaN ) );
    t.false ( isBoxedSymbol ( '' ) );
    t.false ( isBoxedSymbol ( args ) );
    t.false ( isBoxedSymbol ( [1] ) );
    t.false ( isBoxedSymbol ( new Date () ) );
    t.false ( isBoxedSymbol ( new Error () ) );
    t.false ( isBoxedSymbol ( [].slice ) );
    t.false ( isBoxedSymbol ( { 'a': 1 } ) );
    t.false ( isBoxedSymbol ( 1 ) );
    t.false ( isBoxedSymbol ( /x/ ) );
    t.false ( isBoxedSymbol ( 'a' ) );
    t.false ( isBoxedSymbol ( Symbol () ) );

  });

  test ( 'should work with boxed symbols from another realm', t => {

    t.true ( isBoxedSymbol ( realm.boxedSymbol ) );
    t.false ( isBoxedSymbol ( realm.unboxedSymbol ) );

  });

});
