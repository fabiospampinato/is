
/* IMPORT */

import {describe} from 'fava';
import {isArray} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isArray', test => {

  test ( 'should return "true" for arrays', t => {

    t.true ( isArray ( [] ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isArray () );
    t.false ( isArray ( null ) );
    t.false ( isArray ( undefined ) );
    t.false ( isArray ( false ) );
    t.false ( isArray ( 0 ) );
    t.false ( isArray ( NaN ) );
    t.false ( isArray ( '' ) );
    t.false ( isArray ( args ) );
    t.false ( isArray ( new ArrayBuffer ( 2 ) ) );
    t.false ( isArray ( true ) );
    t.false ( isArray ( new Date () ) );
    t.false ( isArray ( new Error () ) );
    t.false ( isArray ( [].slice ) );
    t.false ( isArray ( { 'a': 1 } ) );
    t.false ( isArray ( 1 ) );
    t.false ( isArray ( /x/ ) );
    t.false ( isArray ( 'a' ) );
    t.false ( isArray ( Symbol () ) );
    t.false ( isArray ( { length: 1 } ) );

  });

  test ( 'should work with arrays from another realm', t => {

    t.true ( isArray ( realm.array ) );

  });

});
