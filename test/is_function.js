
/* IMPORT */

import {describe} from 'fava';
import {isFunction} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isFunction', test => {

  test ( 'should return "true" for functions', t => {

    t.true ( isFunction ( () => {} ) );
    t.true ( isFunction ( async () => {} ) );
    t.true ( isFunction ( function () {} ) );
    t.true ( isFunction ( async function () {} ) );
    t.true ( isFunction ( function* () {} ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isFunction () );
    t.false ( isFunction ( null ) );
    t.false ( isFunction ( undefined ) );
    t.false ( isFunction ( 0 ) );
    t.false ( isFunction ( NaN ) );
    t.false ( isFunction ( '' ) );
    t.false ( isFunction ( args ) );
    t.false ( isFunction ( [1] ) );
    t.false ( isFunction ( new Date () ) );
    t.false ( isFunction ( new Error () ) );
    t.false ( isFunction ( { 'a': 1 } ) );
    t.false ( isFunction ( 1 ) );
    t.false ( isFunction ( /x/ ) );
    t.false ( isFunction ( 'a' ) );
    t.false ( isFunction ( Symbol () ) );

  });

  test ( 'should work with functions from another realm', t => {

    t.true ( isFunction ( realm.function ) );

  });

});
