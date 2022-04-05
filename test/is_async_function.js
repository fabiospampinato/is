
/* IMPORT */

import {describe} from 'fava';
import {isAsyncFunction} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isAsyncFunction', test => {

  test ( 'should return "true" for async functions', t => {

    t.true ( isAsyncFunction ( async () => {} ) );
    t.true ( isAsyncFunction ( async function () {} ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isAsyncFunction () );
    t.false ( isAsyncFunction ( null ) );
    t.false ( isAsyncFunction ( undefined ) );
    t.false ( isAsyncFunction ( 0 ) );
    t.false ( isAsyncFunction ( NaN ) );
    t.false ( isAsyncFunction ( '' ) );
    t.false ( isAsyncFunction ( args ) );
    t.false ( isAsyncFunction ( [1] ) );
    t.false ( isAsyncFunction ( new Date () ) );
    t.false ( isAsyncFunction ( new Error () ) );
    t.false ( isAsyncFunction ( { 'a': 1 } ) );
    t.false ( isAsyncFunction ( 1 ) );
    t.false ( isAsyncFunction ( /x/ ) );
    t.false ( isAsyncFunction ( 'a' ) );
    t.false ( isAsyncFunction ( Symbol () ) )
    t.false ( isAsyncFunction ( () => {} ) );
    t.false ( isAsyncFunction ( function () {} ) );
    t.false ( isAsyncFunction ( function* () {} ) );
    t.false ( isAsyncFunction ( async function* () {} ) );

  });

  test ( 'should work with async functions from another realm', t => {

    t.true ( isAsyncFunction ( realm.asyncFunction ) );
    t.false ( isAsyncFunction ( realm.function ) );
    t.false ( isAsyncFunction ( realm.generatorFunction ) );
    t.false ( isAsyncFunction ( realm.asyncGeneratorFunction ) );

  });

});
