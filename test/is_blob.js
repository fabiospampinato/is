
/* IMPORT */

import {describe} from 'fava';
import {isBlob} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isBlob', test => {

  test ( 'should return "true" for blobs', t => {

    class Blob {
      get [Symbol.toStringTag] () {
        return 'Blob';
      }
    }

    t.true ( isBlob ( new Blob () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isBlob () );
    t.false ( isBlob ( null ) );
    t.false ( isBlob ( undefined ) );
    t.false ( isBlob ( 0 ) );
    t.false ( isBlob ( NaN ) );
    t.false ( isBlob ( '' ) );
    t.false ( isBlob ( args ) );
    t.false ( isBlob ( [1] ) );
    t.false ( isBlob ( new Error () ) );
    t.false ( isBlob ( [].slice ) );
    t.false ( isBlob ( { 'a': 1 } ) );
    t.false ( isBlob ( 1 ) );
    t.false ( isBlob ( /x/ ) );
    t.false ( isBlob ( 'a' ) );
    t.false ( isBlob ( Symbol () ) );

  });

  test ( 'should work with blobs from another realm', t => {

    t.true ( isBlob ( realm.blob ) );

  });

});
