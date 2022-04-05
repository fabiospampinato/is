
/* IMPORT */

import {describe} from 'fava';
import {isFinite} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isFinite', test => {

  test ( 'should return "true" for finite numbers', t => {

    t.true ( isFinite ( -100 ) );
    t.true ( isFinite ( 0 ) );
    t.true ( isFinite ( 100 ) );
    t.true ( isFinite ( Number ( 0 ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isFinite () );
    t.false ( isFinite ( null ) );
    t.false ( isFinite ( undefined ) );
    t.false ( isFinite ( NaN ) );
    t.false ( isFinite ( '' ) );
    t.false ( isFinite ( args ) );
    t.false ( isFinite ( [1] ) );
    t.false ( isFinite ( new Error () ) );
    t.false ( isFinite ( [].slice ) );
    t.false ( isFinite ( { 'a': 1 } ) );
    t.false ( isFinite ( /x/ ) );
    t.false ( isFinite ( 'a' ) );
    t.false ( isFinite ( Symbol () ) );
    t.false ( isFinite ( -Infinity ) );
    t.false ( isFinite ( Infinity ) );
    t.false ( isFinite ( Object ( 0 ) ) );

  });

  test ( 'should work with numbers from another realm', t => {

    t.true ( isFinite ( realm.integer ) );

  });

});
