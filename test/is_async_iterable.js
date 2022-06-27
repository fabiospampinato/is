
/* IMPORT */

import {describe} from 'fava';
import {isAsyncIterable} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isAsyncIterable', test => {

  test ( 'should return "true" for async iterators', t => {

    const myAsyncIterable = {
      async * [Symbol.asyncIterator]() {
        yield 'hello';
      }
    };

    t.true ( isAsyncIterable ( myAsyncIterable ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isAsyncIterable () );
    t.false ( isAsyncIterable ( null ) );
    t.false ( isAsyncIterable ( undefined ) );
    t.false ( isAsyncIterable ( args ) );
    t.false ( isAsyncIterable ( new Error () ) );
    t.false ( isAsyncIterable ( [].slice ) );
    t.false ( isAsyncIterable ( { 'a': 1 } ) );
    t.false ( isAsyncIterable ( /x/ ) );
    t.false ( isAsyncIterable ( Symbol () ) );
    t.false ( isAsyncIterable ( -Infinity ) );
    t.false ( isAsyncIterable ( Infinity ) );
    t.false ( isAsyncIterable ( NaN ) );
    t.false ( isAsyncIterable ( Object ( 0 ) ) );
    t.false ( isAsyncIterable ( 0.1 ) );
    t.false ( isAsyncIterable ( -0.1 ) );
    t.false ( isAsyncIterable ( [] ) );
    t.false ( isAsyncIterable ( '' ) );
    t.false ( isAsyncIterable ( new Map () ) );
    t.false ( isAsyncIterable ( new Set () ) );
    t.false ( isAsyncIterable ( new Uint8Array () ) );

  });

  test ( 'should work with async iterators from another realm', t => {

    t.true ( isAsyncIterable ( realm.asyncIterable ) );

  });

});
