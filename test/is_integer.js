
/* IMPORT */

import {describe} from 'fava';
import {isInteger} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isInteger', test => {

  test ( 'should return "true" for integers', t => {

    t.true ( isInteger ( -100 ) );
    t.true ( isInteger ( -0 ) );
    t.true ( isInteger ( 0 ) );
    t.true ( isInteger ( 100 ) );
    t.true ( isInteger ( Number ( 0 ) ) );
    t.true ( isInteger ( 0.0 ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isInteger () );
    t.false ( isInteger ( null ) );
    t.false ( isInteger ( undefined ) );
    t.false ( isInteger ( '' ) );
    t.false ( isInteger ( args ) );
    t.false ( isInteger ( [1] ) );
    t.false ( isInteger ( new Error () ) );
    t.false ( isInteger ( [].slice ) );
    t.false ( isInteger ( { 'a': 1 } ) );
    t.false ( isInteger ( /x/ ) );
    t.false ( isInteger ( 'a' ) );
    t.false ( isInteger ( Symbol () ) );
    t.false ( isInteger ( -Infinity ) );
    t.false ( isInteger ( Infinity ) );
    t.false ( isInteger ( NaN ) );
    t.false ( isInteger ( Object ( 0 ) ) );
    t.false ( isInteger ( 0.1 ) );
    t.false ( isInteger ( -0.1 ) );

  });

  test ( 'should work with integers from another realm', t => {

    t.true ( isInteger ( realm.integer ) );

  });

});
