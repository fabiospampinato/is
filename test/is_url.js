
/* IMPORT */

import {describe} from 'fava';
import {isURL} from '../dist/index.js';
import {realm} from './_utils.js';

/* MAIN */

describe ( 'isURL', test => {

  test ( 'should return "true" for a valid URL string or URL object', t => {

    const url = 'https://github.com/fabiospampinato/is';
    const blob = new Blob ( [ url ], { type: 'text/plain' } );

    t.true ( isURL ( url ) );
    t.true ( isURL ( new URL ( url ) ) );
    t.true ( isURL ( URL.createObjectURL ( blob ) ) );
    t.true ( isURL ( 'http://www.github.com/fabiospampinato/is/' ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isURL ( 'invalid' ) );
    t.false ( isURL ( 'www.github.com' ) );
    t.false ( isURL ( 'github.com/' ) );
    t.false ( isURL ( '' ) );
    t.false ( isURL () );
    t.false ( isURL ( true ) );
    t.false ( isURL ( false ) );
    t.false ( isURL ( 0 ) );
    t.false ( isURL ( null ) );
    t.false ( isURL ( undefined ) );
    t.false ( isURL ( NaN ) );
    t.false ( isURL ( [] ) );
    t.false ( isURL ( {} ) );

  });

  test ( 'should work with a URL from another realm', t => {

    t.true ( isURL ( realm.url ) );

  });

});
