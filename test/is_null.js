
/* IMPORT */

import {describe} from 'fava';
import {isNull} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isNull', test => {

  test ( 'should return "true" for "null"', t => {

    t.true ( isNull ( null ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isNull () );
    t.false ( isNull ( undefined ) );
    t.false ( isNull ( false ) );
    t.false ( isNull ( 0 ) );
    t.false ( isNull ( NaN ) );
    t.false ( isNull ( '' ) );
    t.false ( isNull ( args ) );
    t.false ( isNull ( [1] ) );
    t.false ( isNull ( true ) );
    t.false ( isNull ( new Date () ) );
    t.false ( isNull ( new Error () ) );
    t.false ( isNull ( [].slice ) );
    t.false ( isNull ( { 'a': 1 } ) );
    t.false ( isNull ( 1 ) );
    t.false ( isNull ( /x/ ) );
    t.false ( isNull ( 'a' ) );
    t.false ( isNull ( Symbol () ) );

  });

  test ( 'should work with "null" from another realm', t => {

    t.true ( isNull ( realm.null ) );

  });

});
