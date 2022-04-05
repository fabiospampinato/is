
/* IMPORT */

import {describe} from 'fava';
import {isGeneratorFunction} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isGeneratorFunction', test => {

  test ( 'should return "true" for generator functions', t => {

    t.true ( isGeneratorFunction ( function* () {} ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isGeneratorFunction () );
    t.false ( isGeneratorFunction ( null ) );
    t.false ( isGeneratorFunction ( undefined ) );
    t.false ( isGeneratorFunction ( 0 ) );
    t.false ( isGeneratorFunction ( NaN ) );
    t.false ( isGeneratorFunction ( '' ) );
    t.false ( isGeneratorFunction ( args ) );
    t.false ( isGeneratorFunction ( [1] ) );
    t.false ( isGeneratorFunction ( new Date () ) );
    t.false ( isGeneratorFunction ( new Error () ) );
    t.false ( isGeneratorFunction ( { 'a': 1 } ) );
    t.false ( isGeneratorFunction ( 1 ) );
    t.false ( isGeneratorFunction ( /x/ ) );
    t.false ( isGeneratorFunction ( 'a' ) );
    t.false ( isGeneratorFunction ( Symbol () ) )
    t.false ( isGeneratorFunction ( () => {} ) );
    t.false ( isGeneratorFunction ( function () {} ) );
    t.false ( isGeneratorFunction ( async function () {} ) );
    t.false ( isGeneratorFunction ( async function* () {} ) );

  });

  test ( 'should work with generator functions from another realm', t => {

    t.true ( isGeneratorFunction ( realm.generatorFunction ) );
    t.false ( isGeneratorFunction ( realm.function ) );
    t.false ( isGeneratorFunction ( realm.asyncFunction ) );
    t.false ( isGeneratorFunction ( realm.asyncGeneratorFunction ) );

  });

});
