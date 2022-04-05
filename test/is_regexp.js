
/* IMPORT */

import {describe} from 'fava';
import {isRegExp} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isRegExp', test => {

  test ( 'should return "true" for regexes', t => {

    t.true ( isRegExp ( /x/ ) );
    t.true ( isRegExp ( new RegExp ( 'x' ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isRegExp () );
    t.false ( isRegExp ( null ) );
    t.false ( isRegExp ( undefined ) );
    t.false ( isRegExp ( false ) );
    t.false ( isRegExp ( 0 ) );
    t.false ( isRegExp ( NaN ) );
    t.false ( isRegExp ( '' ) );
    t.false ( isRegExp ( args ) );
    t.false ( isRegExp ( [1] ) );
    t.false ( isRegExp ( true ) );
    t.false ( isRegExp ( new Date () ) );
    t.false ( isRegExp ( new Error () ) );
    t.false ( isRegExp ( [].slice ) );
    t.false ( isRegExp ( { 'a': 1 } ) );
    t.false ( isRegExp ( 1 ) );
    t.false ( isRegExp ( 'a' ) );
    t.false ( isRegExp ( Symbol () ) );

  });

  test ( 'should work with regexes from another realm', t => {

    t.true ( isRegExp ( realm.regexp ) );

  });

});
