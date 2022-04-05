
/* IMPORT */

import {describe} from 'fava';
import {isWeakRef} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isWeakRef', test => {

  test ( 'should return "true" for weaksets', t => {

    t.true ( isWeakRef ( new WeakRef ( WeakRef ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isWeakRef () );
    t.false ( isWeakRef ( null ) );
    t.false ( isWeakRef ( undefined ) );
    t.false ( isWeakRef ( false ) );
    t.false ( isWeakRef ( 0 ) );
    t.false ( isWeakRef ( NaN ) );
    t.false ( isWeakRef ( '' ) );
    t.false ( isWeakRef ( args ) );
    t.false ( isWeakRef ( [1] ) );
    t.false ( isWeakRef ( true ) );
    t.false ( isWeakRef ( new Date () ) );
    t.false ( isWeakRef ( new Error () ) );
    t.false ( isWeakRef ( [].slice ) );
    t.false ( isWeakRef ( { 'a': 1 } ) );
    t.false ( isWeakRef ( 1 ) );
    t.false ( isWeakRef ( /x/ ) );
    t.false ( isWeakRef ( 'a' ) );
    t.false ( isWeakRef ( Symbol () ) );

  });

  test ( 'should work with weaksets from another realm', t => {

    t.true ( isWeakRef ( realm.weakRef ) );

  });

});
