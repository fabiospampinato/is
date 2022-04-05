
/* IMPORT */

import {describe} from 'fava';
import {isPrimitive} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isPrimitive', test => {

  test ( 'should return "true" for primitives', t => {

    t.true ( isPrimitive () );
    t.true ( isPrimitive ( null ) );
    t.true ( isPrimitive ( undefined ) );
    t.true ( isPrimitive ( '' ) );
    t.true ( isPrimitive ( 0 ) );
    t.true ( isPrimitive ( Infinity ) );
    t.true ( isPrimitive ( NaN ) );
    t.true ( isPrimitive ( true ) );
    t.true ( isPrimitive ( false ) );
    t.true ( isPrimitive ( Symbol () ) );
    t.true ( isPrimitive ( 0n ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isPrimitive ( args ) );
    t.false ( isPrimitive ( [1] ) );
    t.false ( isPrimitive ( new Date () ) );
    t.false ( isPrimitive ( new Error () ) );
    t.false ( isPrimitive ( [].slice ) );
    t.false ( isPrimitive ( { 'a': 1 } ) );
    t.false ( isPrimitive ( /x/ ) );

  });

  test ( 'should work with primitives from another realm', t => {

    t.true ( isPrimitive ( realm.null ) );
    t.true ( isPrimitive ( realm.undefined ) );
    t.true ( isPrimitive ( realm.nan ) );
    t.true ( isPrimitive ( realm.symbol ) );
    t.true ( isPrimitive ( realm.bigint ) );

  });

});
