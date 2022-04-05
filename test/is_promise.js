
/* IMPORT */

import {describe} from 'fava';
import {isPromise} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isPromise', test => {

  test ( 'should return "true" for promises', t => {

    t.true ( isPromise ( Promise.resolve () ) );
    t.true ( isPromise ( (async () => {})() ) );
    t.true ( isPromise ( (async function () {})() ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isPromise () );
    t.false ( isPromise ( null ) );
    t.false ( isPromise ( undefined ) );
    t.false ( isPromise ( false ) );
    t.false ( isPromise ( 0 ) );
    t.false ( isPromise ( NaN ) );
    t.false ( isPromise ( '' ) );
    t.false ( isPromise ( args ) );
    t.false ( isPromise ( [1] ) );
    t.false ( isPromise ( true ) );
    t.false ( isPromise ( new Date () ) );
    t.false ( isPromise ( new Error () ) );
    t.false ( isPromise ( [].slice ) );
    t.false ( isPromise ( { 'a': 1 } ) );
    t.false ( isPromise ( 1 ) );
    t.false ( isPromise ( /x/ ) );
    t.false ( isPromise ( 'a' ) );
    t.false ( isPromise ( Symbol () ) );

  });

  test ( 'should work with promises from another realm', t => {

    t.true ( isPromise ( realm.promise ) );

  });

});
