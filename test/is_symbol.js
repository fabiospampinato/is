
/* IMPORT */

import {describe} from 'fava';
import {isSymbol} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isSymbol', test => {

  test ( 'should return "true" for symbols', t => {

    t.true ( isSymbol ( Symbol () ) );
    t.true ( isSymbol ( Object ( Symbol () ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isSymbol () );
    t.false ( isSymbol ( null ) );
    t.false ( isSymbol ( undefined ) );
    t.false ( isSymbol ( 0 ) );
    t.false ( isSymbol ( NaN ) );
    t.false ( isSymbol ( '' ) );
    t.false ( isSymbol ( args ) );
    t.false ( isSymbol ( [1] ) );
    t.false ( isSymbol ( new Date () ) );
    t.false ( isSymbol ( new Error () ) );
    t.false ( isSymbol ( [].slice ) );
    t.false ( isSymbol ( { 'a': 1 } ) );
    t.false ( isSymbol ( 1 ) );
    t.false ( isSymbol ( /x/ ) );
    t.false ( isSymbol ( 'a' ) );

  });

  test ( 'should work with symbols from another realm', t => {

    t.true ( isSymbol ( realm.symbol ) );

  });

});
