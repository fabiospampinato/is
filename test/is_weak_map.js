
/* IMPORT */

import {describe} from 'fava';
import {isWeakMap} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isWeakMap', test => {

  test ( 'should return "true" for weakmaps', t => {

    t.true ( isWeakMap ( new WeakMap () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isWeakMap () );
    t.false ( isWeakMap ( null ) );
    t.false ( isWeakMap ( undefined ) );
    t.false ( isWeakMap ( false ) );
    t.false ( isWeakMap ( 0 ) );
    t.false ( isWeakMap ( NaN ) );
    t.false ( isWeakMap ( '' ) );
    t.false ( isWeakMap ( args ) );
    t.false ( isWeakMap ( [1] ) );
    t.false ( isWeakMap ( true ) );
    t.false ( isWeakMap ( new Date () ) );
    t.false ( isWeakMap ( new Error () ) );
    t.false ( isWeakMap ( [].slice ) );
    t.false ( isWeakMap ( { 'a': 1 } ) );
    t.false ( isWeakMap ( 1 ) );
    t.false ( isWeakMap ( /x/ ) );
    t.false ( isWeakMap ( 'a' ) );
    t.false ( isWeakMap ( Symbol () ) );
    t.false ( isWeakMap ( new Map () ) );

  });

  test ( 'should work with weakmaps from another realm', t => {

    t.true ( isWeakMap ( realm.weakMap ) );

  });

});
