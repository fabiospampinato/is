
/* IMPORT */

import {describe} from 'fava';
import {isBoundFunction} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isBoundFunction', test => {

  test ( 'should return "true" for bound functions', t => {

    t.true ( isBoundFunction ( () => {} ) );
    t.true ( isBoundFunction ( (function () {}).bind ( this ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBoundFunction () );
    t.false ( isBoundFunction ( null ) );
    t.false ( isBoundFunction ( undefined ) );
    t.false ( isBoundFunction ( 0 ) );
    t.false ( isBoundFunction ( NaN ) );
    t.false ( isBoundFunction ( '' ) );
    t.false ( isBoundFunction ( args ) );
    t.false ( isBoundFunction ( [1] ) );
    t.false ( isBoundFunction ( new Date () ) );
    t.false ( isBoundFunction ( new Error () ) );
    t.false ( isBoundFunction ( { 'a': 1 } ) );
    t.false ( isBoundFunction ( 1 ) );
    t.false ( isBoundFunction ( /x/ ) );
    t.false ( isBoundFunction ( 'a' ) );
    t.false ( isBoundFunction ( Symbol () ) );
    t.false ( isBoundFunction ( function () {} ) );

  });

  test ( 'should work with bound functions from another realm', t => {

    t.true ( isBoundFunction ( realm.arrowFunction ) );
    t.true ( isBoundFunction ( realm.boundFunction ) );
    t.false ( isBoundFunction ( realm.function ) );

  });

});
