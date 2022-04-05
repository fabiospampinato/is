
/* IMPORT */

import {describe} from 'fava';
import {isArguments} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isArguments', test => {

  test ( 'should return "true" for arguments', t => {

    t.true ( isArguments ( args ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isArguments () );
    t.false ( isArguments ( null ) );
    t.false ( isArguments ( undefined ) );
    t.false ( isArguments ( false ) );
    t.false ( isArguments ( 0 ) );
    t.false ( isArguments ( NaN ) );
    t.false ( isArguments ( '' ) );
    t.false ( isArguments ( [1] ) );
    t.false ( isArguments ( true ) );
    t.false ( isArguments ( new Date () ) );
    t.false ( isArguments ( new Error () ) );
    t.false ( isArguments ( [].slice ) );
    t.false ( isArguments ( { 'a': 1 } ) );
    t.false ( isArguments ( 1 ) );
    t.false ( isArguments ( /x/ ) );
    t.false ( isArguments ( 'a' ) );
    t.false ( isArguments ( Symbol () ) );

  });

  test ( 'should work with numbers from another realm', t => {

    t.true ( isArguments ( realm.arguments ) );

  });

});
