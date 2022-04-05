
/* IMPORT */

import {describe} from 'fava';
import {isMap} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isMap', test => {

  test ( 'should return "true" for maps', t => {

    t.true ( isMap ( new Map () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isMap () );
    t.false ( isMap ( null ) );
    t.false ( isMap ( undefined ) );
    t.false ( isMap ( false ) );
    t.false ( isMap ( 0 ) );
    t.false ( isMap ( NaN ) );
    t.false ( isMap ( '' ) );
    t.false ( isMap ( args ) );
    t.false ( isMap ( [1] ) );
    t.false ( isMap ( true ) );
    t.false ( isMap ( new Date () ) );
    t.false ( isMap ( new Error () ) );
    t.false ( isMap ( [].slice ) );
    t.false ( isMap ( { 'a': 1 } ) );
    t.false ( isMap ( 1 ) );
    t.false ( isMap ( /x/ ) );
    t.false ( isMap ( 'a' ) );
    t.false ( isMap ( Symbol () ) );
    t.false ( isMap ( new WeakMap () ) );

  });

  test ( 'should work with maps from another realm', t => {

    t.true ( isMap ( realm.map ) );

  });

});
