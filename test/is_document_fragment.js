
/* IMPORT */

import {describe} from 'fava';
import {isDocumentFragment} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isDocumentFragment', test => {

  test ( 'should return "true" for document fragments', t => {

    class DocumentFragment { nodeType = 11 }

    t.true ( isDocumentFragment ( new DocumentFragment () ) );

  });

  test ( 'should return "true" for non-plain objects', t => {

    function Foo () {
      this.nodeType = 11;
    }

    t.true ( isDocumentFragment ( new Foo () ) );

  });

  test ( 'should return "false" for non DOM document fragments', t => {

    t.false ( isDocumentFragment () );
    t.false ( isDocumentFragment ( null ) );
    t.false ( isDocumentFragment ( undefined ) );
    t.false ( isDocumentFragment ( false ) );
    t.false ( isDocumentFragment ( 0 ) );
    t.false ( isDocumentFragment ( NaN ) );
    t.false ( isDocumentFragment ( '' ) );
    t.false ( isDocumentFragment ( args ) );
    t.false ( isDocumentFragment ( [1, 2, 3] ) );
    t.false ( isDocumentFragment ( true ) );
    t.false ( isDocumentFragment ( new Date () ) );
    t.false ( isDocumentFragment ( new Error () ) );
    t.false ( isDocumentFragment ( [].slice ) );
    t.false ( isDocumentFragment ( { 'a': 1 } ) );
    t.false ( isDocumentFragment ( 1 ) );
    t.false ( isDocumentFragment ( /x/ ) );
    t.false ( isDocumentFragment ( 'a' ) );
    t.false ( isDocumentFragment ( Symbol () ) );

  });

  test ( 'should return "false" for plain objects', t => {

    t.false ( isDocumentFragment ({ 'nodeType': 11 }) );
    t.false ( isDocumentFragment ({ 'nodeType': Object ( 11 ) }) );
    t.false ( isDocumentFragment ({ 'nodeType': true }) );
    t.false ( isDocumentFragment ({ 'nodeType': [11] }) );
    t.false ( isDocumentFragment ({ 'nodeType': '11' }) );
    t.false ( isDocumentFragment ({ 'nodeType': '011' }) );

  });

  test ( 'should work with a DOM document fragment from another realm', t => {

    t.true ( isDocumentFragment ( realm.documentFragment ) );

  });

});
