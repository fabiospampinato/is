
/* IMPORT */

import {describe} from 'fava';
import {isNumber} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isNumber', test => {

  test ( 'should return "true" for numbers', t => {

    t.true ( isNumber ( -100 ) );
    t.true ( isNumber ( 0 ) );
    t.true ( isNumber ( 100 ) );
    t.true ( isNumber ( Object ( 0 ) ) );
    t.true ( isNumber ( -Infinity ) );
    t.true ( isNumber ( Infinity ) );
    t.true ( isNumber ( NaN ) );
    t.true ( isNumber ( Number ( 0 ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isNumber () );
    t.false ( isNumber ( null ) );
    t.false ( isNumber ( undefined ) );
    t.false ( isNumber ( '' ) );
    t.false ( isNumber ( args ) );
    t.false ( isNumber ( [1] ) );
    t.false ( isNumber ( new Error () ) );
    t.false ( isNumber ( [].slice ) );
    t.false ( isNumber ( { 'a': 1 } ) );
    t.false ( isNumber ( /x/ ) );
    t.false ( isNumber ( 'a' ) );
    t.false ( isNumber ( Symbol () ) );

  });

  test ( 'should work with numbers from another realm', t => {

    t.true ( isNumber ( realm.number ) );

  });

});
