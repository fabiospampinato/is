
/* IMPORT */

import {describe} from 'fava';
import {isWeakSet} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isWeakSet', test => {

  test ( 'should return "true" for weaksets', t => {

    t.true ( isWeakSet ( new WeakSet () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isWeakSet () );
    t.false ( isWeakSet ( null ) );
    t.false ( isWeakSet ( undefined ) );
    t.false ( isWeakSet ( false ) );
    t.false ( isWeakSet ( 0 ) );
    t.false ( isWeakSet ( NaN ) );
    t.false ( isWeakSet ( '' ) );
    t.false ( isWeakSet ( args ) );
    t.false ( isWeakSet ( [1] ) );
    t.false ( isWeakSet ( true ) );
    t.false ( isWeakSet ( new Date () ) );
    t.false ( isWeakSet ( new Error () ) );
    t.false ( isWeakSet ( [].slice ) );
    t.false ( isWeakSet ( { 'a': 1 } ) );
    t.false ( isWeakSet ( 1 ) );
    t.false ( isWeakSet ( /x/ ) );
    t.false ( isWeakSet ( 'a' ) );
    t.false ( isWeakSet ( Symbol () ) );
    t.false ( isWeakSet ( new Set () ) );

  });

  test ( 'should work with weaksets from another realm', t => {

    t.true ( isWeakSet ( realm.weakSet ) );

  });

});
