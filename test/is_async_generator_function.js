
/* IMPORT */

import {describe} from 'fava';
import {isAsyncGeneratorFunction} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isAsyncGeneratorFunction', test => {

  test ( 'should return "true" for async generator functions', t => {

    t.true ( isAsyncGeneratorFunction ( async function* () {} ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isAsyncGeneratorFunction () );
    t.false ( isAsyncGeneratorFunction ( null ) );
    t.false ( isAsyncGeneratorFunction ( undefined ) );
    t.false ( isAsyncGeneratorFunction ( 0 ) );
    t.false ( isAsyncGeneratorFunction ( NaN ) );
    t.false ( isAsyncGeneratorFunction ( '' ) );
    t.false ( isAsyncGeneratorFunction ( args ) );
    t.false ( isAsyncGeneratorFunction ( [1] ) );
    t.false ( isAsyncGeneratorFunction ( new Date () ) );
    t.false ( isAsyncGeneratorFunction ( new Error () ) );
    t.false ( isAsyncGeneratorFunction ( { 'a': 1 } ) );
    t.false ( isAsyncGeneratorFunction ( 1 ) );
    t.false ( isAsyncGeneratorFunction ( /x/ ) );
    t.false ( isAsyncGeneratorFunction ( 'a' ) );
    t.false ( isAsyncGeneratorFunction ( Symbol () ) )
    t.false ( isAsyncGeneratorFunction ( () => {} ) );
    t.false ( isAsyncGeneratorFunction ( function () {} ) );
    t.false ( isAsyncGeneratorFunction ( function* () {} ) );
    t.false ( isAsyncGeneratorFunction ( async function () {} ) );

  });

  test ( 'should work with async generator functions from another realm', t => {

    t.true ( isAsyncGeneratorFunction ( realm.asyncGeneratorFunction ) );
    t.false ( isAsyncGeneratorFunction ( realm.function ) );
    t.false ( isAsyncGeneratorFunction ( realm.generatorFunction ) );
    t.false ( isAsyncGeneratorFunction ( realm.asyncFunction ) );

  });

});
