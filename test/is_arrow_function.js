
/* IMPORT */

import {describe} from 'fava';
import {isArrowFunction} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isArrowFunction', test => {

  test ( 'should return "true" for arrow functions', t => {

    t.true ( isArrowFunction ( () => {} ) );
    t.true ( isArrowFunction ( ( a ) => {} ) );
    t.true ( isArrowFunction ( a => {} ) );
    t.true ( isArrowFunction ( async () => {} ) );
    t.true ( isArrowFunction ( async ( a ) => {} ) );
    t.true ( isArrowFunction ( async a => {} ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isArrowFunction () );
    t.false ( isArrowFunction ( null ) );
    t.false ( isArrowFunction ( undefined ) );
    t.false ( isArrowFunction ( 0 ) );
    t.false ( isArrowFunction ( NaN ) );
    t.false ( isArrowFunction ( '' ) );
    t.false ( isArrowFunction ( args ) );
    t.false ( isArrowFunction ( [1] ) );
    t.false ( isArrowFunction ( new Date () ) );
    t.false ( isArrowFunction ( new Error () ) );
    t.false ( isArrowFunction ( { 'a': 1 } ) );
    t.false ( isArrowFunction ( 1 ) );
    t.false ( isArrowFunction ( /x/ ) );
    t.false ( isArrowFunction ( 'a' ) );
    t.false ( isArrowFunction ( Symbol () ) )
    t.false ( isArrowFunction ( function () {} ) );
    t.false ( isArrowFunction ( function ( a ) {} ) );
    t.false ( isArrowFunction ( async function () {} ) );
    t.false ( isArrowFunction ( async function ( a ) {} ) );
    t.false ( isArrowFunction ( function* () {} ) );
    t.false ( isArrowFunction ( function* ( a ) {} ) );
    t.false ( isArrowFunction ( async function* () {} ) );
    t.false ( isArrowFunction ( async function* ( a ) {} ) );

  });

  test ( 'should work with arrow functions from another realm', t => {

    t.true ( isArrowFunction ( realm.arrowFunction ) );
    t.false ( isArrowFunction ( realm.function ) );

  });

});
