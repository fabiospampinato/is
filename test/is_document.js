
/* IMPORT */

import {describe} from 'fava';
import {isDocument} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isDocument', test => {

  test ( 'should return "true" for documents', t => {

    class Document { nodeType = 9 }

    t.true ( isDocument ( new Document () ) );

  });

  test ( 'should return "true" for non-plain objects', t => {

    function Foo () {
      this.nodeType = 9;
    }

    t.true ( isDocument ( new Foo () ) );

  });

  test ( 'should return "false" for non DOM documents', t => {

    t.false ( isDocument () );
    t.false ( isDocument ( null ) );
    t.false ( isDocument ( undefined ) );
    t.false ( isDocument ( false ) );
    t.false ( isDocument ( 0 ) );
    t.false ( isDocument ( NaN ) );
    t.false ( isDocument ( '' ) );
    t.false ( isDocument ( args ) );
    t.false ( isDocument ( [1, 2, 3] ) );
    t.false ( isDocument ( true ) );
    t.false ( isDocument ( new Date () ) );
    t.false ( isDocument ( new Error () ) );
    t.false ( isDocument ( [].slice ) );
    t.false ( isDocument ( { 'a': 1 } ) );
    t.false ( isDocument ( 1 ) );
    t.false ( isDocument ( /x/ ) );
    t.false ( isDocument ( 'a' ) );
    t.false ( isDocument ( Symbol () ) );

  });

  test ( 'should return "false" for plain objects', t => {

    t.false ( isDocument ({ 'nodeType': 9 }) );
    t.false ( isDocument ({ 'nodeType': Object ( 9 ) }) );
    t.false ( isDocument ({ 'nodeType': true }) );
    t.false ( isDocument ({ 'nodeType': [9] }) );
    t.false ( isDocument ({ 'nodeType': '9' }) );
    t.false ( isDocument ({ 'nodeType': '009' }) );

  });

  test ( 'should work with a DOM document from another realm', t => {

    t.true ( isDocument ( realm.document ) );

  });

});
