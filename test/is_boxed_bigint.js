
/* IMPORT */

import {describe} from 'fava';
import {isBoxedBigInt} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isBoxedBigInt', test => {

  test ( 'should return "true" for boxed bigints', t => {

    t.true ( isBoxedBigInt ( Object ( 0n ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBoxedBigInt () );
    t.false ( isBoxedBigInt ( null ) );
    t.false ( isBoxedBigInt ( undefined ) );
    t.false ( isBoxedBigInt ( '' ) );
    t.false ( isBoxedBigInt ( args ) );
    t.false ( isBoxedBigInt ( [1] ) );
    t.false ( isBoxedBigInt ( new Error () ) );
    t.false ( isBoxedBigInt ( [].slice ) );
    t.false ( isBoxedBigInt ( { 'a': 1 } ) );
    t.false ( isBoxedBigInt ( /x/ ) );
    t.false ( isBoxedBigInt ( 'a' ) );
    t.false ( isBoxedBigInt ( Symbol () ) );
    t.false ( isBoxedBigInt ( 0n ) );
    t.false ( isBoxedBigInt ( 100n ) );

  });

  test ( 'should work with boxed bigints from another realm', t => {

    t.true ( isBoxedBigInt ( realm.boxedBigint ) );
    t.false ( isBoxedBigInt ( realm.unboxedBigint ) );

  });

});
