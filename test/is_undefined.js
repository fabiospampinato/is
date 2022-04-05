
/* IMPORT */

import {describe} from 'fava';
import {isUndefined} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isUndefined', test => {

  test ( 'should return "true" for "undefined"', t => {

    t.true ( isUndefined () );
    t.true ( isUndefined ( undefined ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isUndefined ( null ) );
    t.false ( isUndefined ( false ) );
    t.false ( isUndefined ( 0 ) );
    t.false ( isUndefined ( NaN ) );
    t.false ( isUndefined ( '' ) );
    t.false ( isUndefined ( args ) );
    t.false ( isUndefined ( [1] ) );
    t.false ( isUndefined ( true ) );
    t.false ( isUndefined ( new Date () ) );
    t.false ( isUndefined ( new Error () ) );
    t.false ( isUndefined ( [].slice ) );
    t.false ( isUndefined ( { 'a': 1 } ) );
    t.false ( isUndefined ( 1 ) );
    t.false ( isUndefined ( /x/ ) );
    t.false ( isUndefined ( 'a' ) );
    t.false ( isUndefined ( Symbol () ) );

  });

  test ( 'should work with "undefined" from another realm', t => {

    t.true ( isUndefined ( realm.undefined ) );

  });

});
