
/* IMPORT */

import {describe} from 'fava';
import {isOdd} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isOdd', test => {

  test ( 'should return "true" for odd integers', t => {

    t.true ( isOdd ( -101 ) );
    t.true ( isOdd ( 1 ) );
    t.true ( isOdd ( 101 ) );
    t.true ( isOdd ( Number ( 1 ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isOdd () );
    t.false ( isOdd ( null ) );
    t.false ( isOdd ( undefined ) );
    t.false ( isOdd ( NaN ) );
    t.false ( isOdd ( '' ) );
    t.false ( isOdd ( args ) );
    t.false ( isOdd ( [1] ) );
    t.false ( isOdd ( new Error () ) );
    t.false ( isOdd ( [].slice ) );
    t.false ( isOdd ( { 'a': 1 } ) );
    t.false ( isOdd ( /x/ ) );
    t.false ( isOdd ( 'a' ) );
    t.false ( isOdd ( Symbol () ) );
    t.false ( isOdd ( -Infinity ) );
    t.false ( isOdd ( Infinity ) );
    t.false ( isOdd ( Object ( 0 ) ) );
    t.false ( isOdd ( 0 ) );
    t.false ( isOdd ( -2 ) );
    t.false ( isOdd ( 2.1 ) );
    t.false ( isOdd ( -2.1 ) );
    t.false ( isOdd ( -1.2 ) );
    t.false ( isOdd ( 1.2 ) );

  });

  test ( 'should work with numbers from another realm', t => {

    t.true ( isOdd ( realm.odd ) );

  });

});
