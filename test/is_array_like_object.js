
/* IMPORT */

import {describe} from 'fava';
import {isArrayLikeObject} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isArrayLikeObject', test => {

  test ( 'should return "true" for array-like values', t => {

    for ( const value of [args, [1, 2, 3], { '0': 'a', 'length': 1 }, Object ( '' )] ) {

      t.true ( isArrayLikeObject ( value ) );

    }

  });

  test ( 'should return "false" for non-arrays', t => {

    t.false ( isArrayLikeObject () );
    t.false ( isArrayLikeObject ( null ) );
    t.false ( isArrayLikeObject ( undefined ) );
    t.false ( isArrayLikeObject ( false ) );
    t.false ( isArrayLikeObject ( 0 ) );
    t.false ( isArrayLikeObject ( NaN ) );
    t.false ( isArrayLikeObject ( true ) );
    t.false ( isArrayLikeObject ( new Date () ) );
    t.false ( isArrayLikeObject ( new Error () ) );
    t.false ( isArrayLikeObject ( [].slice ) );
    t.false ( isArrayLikeObject ( { 'a': 1 } ) );
    t.false ( isArrayLikeObject ( 1 ) );
    t.false ( isArrayLikeObject ( /x/ ) );
    t.false ( isArrayLikeObject ( Symbol () ) );
    t.false ( isArrayLikeObject ( 'a' ) );

  });

  test ( 'should work with an array from another realm', t => {

    for ( const value of [realm.arguments, realm.array, realm.string] ) {

      t.true ( isArrayLikeObject ( value ) );

    }

  });

});
