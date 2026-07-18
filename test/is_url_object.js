
/* IMPORT */

import {describe} from 'fava';
import {isURLObject} from '../dist/index.js';

/* MAIN */

describe ( 'isURLObject', test => {

  const url = 'https://github.com/fabiospampinato/is';
  const blob = new Blob ( [ url ], { type: 'text/plain' } );

  test ( 'should return "true" for a URL object', t => {

    t.true ( isURLObject ( new URL ( url ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isURLObject ( url ) );
    t.false ( isURLObject ( URL.createObjectURL ( blob ) ) );
    t.false ( isURLObject ( 'http://www.github.com/fabiospampinato/is/' ) );
    t.false ( isURLObject ( 'invalid' ) );
    t.false ( isURLObject ( 'www.github.com' ) );
    t.false ( isURLObject ( 'github.com/' ) );
    t.false ( isURLObject ( '' ) );
    t.false ( isURLObject () );
    t.false ( isURLObject ( true ) );
    t.false ( isURLObject ( false ) );
    t.false ( isURLObject ( 0 ) );
    t.false ( isURLObject ( null ) );
    t.false ( isURLObject ( undefined ) );
    t.false ( isURLObject ( NaN ) );

  });

});
