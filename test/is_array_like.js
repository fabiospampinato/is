
/* IMPORT */

import {describe} from 'fava';
import {isArrayLike} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isArrayLike', test => {

  test ( 'should return "true" for array-like values', t => {

    for ( const value of [args, [1, 2, 3], { '0': 'a', 'length': 1 }, 'a'] ) {

      t.true ( isArrayLike ( value ) );

    }

  });

  test ( 'should return "false" for non-arrays', t => {

    t.false ( isArrayLike () );
    t.false ( isArrayLike ( null ) );
    t.false ( isArrayLike ( undefined ) );
    t.false ( isArrayLike ( false ) );
    t.false ( isArrayLike ( 0 ) );
    t.false ( isArrayLike ( NaN ) );
    t.false ( isArrayLike ( true ) );
    t.false ( isArrayLike ( new Date () ) );
    t.false ( isArrayLike ( new Error () ) );
    t.false ( isArrayLike ( [].slice ) );
    t.false ( isArrayLike ( { 'a': 1 } ) );
    t.false ( isArrayLike ( 1 ) );
    t.false ( isArrayLike ( /x/ ) );
    t.false ( isArrayLike ( Symbol () ) );

  });

  test ( 'should work with an array from another realm', t => {

    for ( const value of [realm.arguments, realm.array, realm.string] ) {

      t.true ( isArrayLike ( value ) );

    }

  });

});
