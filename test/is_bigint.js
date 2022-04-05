
/* IMPORT */

import {describe} from 'fava';
import {isBigInt} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isBigInt', test => {

  test ( 'should return "true" for bigints', t => {

    t.true ( isBigInt ( 0n ) );
    t.true ( isBigInt ( 100n ) );
    t.true ( isBigInt ( Object ( 0n ) ) );
    t.true ( isBigInt ( BigInt ( 0 ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBigInt () );
    t.false ( isBigInt ( null ) );
    t.false ( isBigInt ( undefined ) );
    t.false ( isBigInt ( '' ) );
    t.false ( isBigInt ( args ) );
    t.false ( isBigInt ( [1] ) );
    t.false ( isBigInt ( new Error () ) );
    t.false ( isBigInt ( [].slice ) );
    t.false ( isBigInt ( { 'a': 1 } ) );
    t.false ( isBigInt ( /x/ ) );
    t.false ( isBigInt ( 'a' ) );
    t.false ( isBigInt ( Symbol () ) );

  });

  test ( 'should work with bigints from another realm', t => {

    t.true ( isBigInt ( realm.bigint ) );

  });

});
