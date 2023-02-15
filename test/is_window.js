
/* IMPORT */

import {describe} from 'fava';
import {isWindow} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isWindow', test => {

  test ( 'should return "true" for windows', t => {

    t.false ( isWindow ( globalThis ) );

    Object.defineProperty ( globalThis, Symbol.toStringTag, {
      get () {
        return 'Window';
      }
    });

    t.true ( isWindow ( globalThis ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isWindow () );
    t.false ( isWindow ( null ) );
    t.false ( isWindow ( undefined ) );
    t.false ( isWindow ( 0 ) );
    t.false ( isWindow ( NaN ) );
    t.false ( isWindow ( '' ) );
    t.false ( isWindow ( args ) );
    t.false ( isWindow ( [1] ) );
    t.false ( isWindow ( new Error () ) );
    t.false ( isWindow ( [].slice ) );
    t.false ( isWindow ( { 'a': 1 } ) );
    t.false ( isWindow ( 1 ) );
    t.false ( isWindow ( /x/ ) );
    t.false ( isWindow ( 'a' ) );
    t.false ( isWindow ( Symbol () ) );

  });

  test.skip ( 'should work with windows from another realm', t => { //TODO: How could this be implemented?

    t.true ( isWindow ( realm.window ) );

  });

});
