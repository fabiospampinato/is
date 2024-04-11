
/* IMPORT */

import {describe} from 'fava';
import {isValidJSON} from '../dist/index.js';
import {realm} from './_utils.js';

/* MAIN */

describe ( 'isValidJSON', test => {

  test ( 'should return "true" for valid JSON', t => {

    t.true ( isValidJSON ( 'true' ) );
    t.true ( isValidJSON ( 'false' ) );
    t.true ( isValidJSON ( '1' ) );
    t.true ( isValidJSON ( '0' ) );
    t.true ( isValidJSON ( 'null' ) );
    t.true ( isValidJSON ( '[]' ) );
    t.true ( isValidJSON ( '{}' ) );
    t.true ( isValidJSON ( JSON.stringify({}) ) );
    t.true ( isValidJSON ( JSON.stringify({ a: 1 }, null, 2) ) );
    t.true ( isValidJSON ( '{ "a": 1 }' ) );
    t.true ( isValidJSON ( '"a"' ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isValidJSON ( '{' ) );
    t.false ( isValidJSON () );
    t.false ( isValidJSON ( true ) );
    t.false ( isValidJSON ( false ) );
    t.false ( isValidJSON ( 1 ) );
    t.false ( isValidJSON ( 0 ) );
    t.false ( isValidJSON ( null ) );
    t.false ( isValidJSON ( undefined ) );
    t.false ( isValidJSON ( 'undefined' ) );
    t.false ( isValidJSON ( 'NaN' ) );
    t.false ( isValidJSON ( NaN ) );
    t.false ( isValidJSON ( Symbol() ) );
    t.false ( isValidJSON ( [] ) );
    t.false ( isValidJSON ( {} ) );
    t.false ( isValidJSON ( { a: 1 } ) );
    t.false ( isValidJSON ( '{ a: 1 }' ) );
    t.false ( isValidJSON ( "{ 'a': 1 }" ) );
    t.false ( isValidJSON ( 'a' ) );
    t.false ( isValidJSON ( '' ) );

  });

  test ( 'should work with JSON from another realm', t => {

    t.true ( isValidJSON ( realm.json ) );

  });

});
