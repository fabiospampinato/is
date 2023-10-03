
/* IMPORT */

import {describe} from 'fava';
import {isDefined} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isDefined', test => {

  test ( 'should return "true" for anything except "null" and "undefined', t => {

    t.true ( isDefined ( false ) );
    t.true ( isDefined ( 0 ) );
    t.true ( isDefined ( NaN ) );
    t.true ( isDefined ( '' ) );
    t.true ( isDefined ( args ) );
    t.true ( isDefined ( [1] ) );
    t.true ( isDefined ( true ) );
    t.true ( isDefined ( new Date () ) );
    t.true ( isDefined ( new Error () ) );
    t.true ( isDefined ( [].slice ) );
    t.true ( isDefined ( { 'a': 1 } ) );
    t.true ( isDefined ( 1 ) );
    t.true ( isDefined ( /x/ ) );
    t.true ( isDefined ( 'a' ) );
    t.true ( isDefined ( Symbol () ) );

  });

  test ( 'should return "false" for "null" and "undefined"', t => {

    t.false ( isDefined () );
    t.false ( isDefined ( undefined ) );
    t.false ( isDefined ( null ) );

  });

});
