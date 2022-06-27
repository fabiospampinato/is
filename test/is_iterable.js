
/* IMPORT */

import {describe} from 'fava';
import {isIterable} from '../dist/index.js';
import {realm} from './_utils.js';

/* MAIN */

describe ( 'isIterable', test => {

  test ( 'should return "true" for iterators', t => {

    t.true ( isIterable ( [] ) );
    t.true ( isIterable ( '' ) );
    t.true ( isIterable ( new Map () ) );
    t.true ( isIterable ( new Set () ) );
    t.true ( isIterable ( new Uint8Array () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isIterable () );
    t.false ( isIterable ( null ) );
    t.false ( isIterable ( undefined ) );
    t.false ( isIterable ( new Error () ) );
    t.false ( isIterable ( [].slice ) );
    t.false ( isIterable ( { 'a': 1 } ) );
    t.false ( isIterable ( /x/ ) );
    t.false ( isIterable ( Symbol () ) );
    t.false ( isIterable ( -Infinity ) );
    t.false ( isIterable ( Infinity ) );
    t.false ( isIterable ( NaN ) );
    t.false ( isIterable ( Object ( 0 ) ) );
    t.false ( isIterable ( 0.1 ) );
    t.false ( isIterable ( -0.1 ) );

  });

  test ( 'should work with iterators from another realm', t => {

    t.true ( isIterable ( realm.array ) );

  });

});
