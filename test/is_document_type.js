
/* IMPORT */

import {describe} from 'fava';
import {isDocumentType} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isDocumentType', test => {

  test ( 'should return "true" for document types', t => {

    class DocumentType { nodeType = 10 }

    t.true ( isDocumentType ( new DocumentType () ) );

  });

  test ( 'should return "true" for non-plain objects', t => {

    function Foo () {
      this.nodeType = 10;
    }

    t.true ( isDocumentType ( new Foo () ) );

  });

  test ( 'should return "false" for non DOM document types', t => {

    t.false ( isDocumentType () );
    t.false ( isDocumentType ( null ) );
    t.false ( isDocumentType ( undefined ) );
    t.false ( isDocumentType ( false ) );
    t.false ( isDocumentType ( 0 ) );
    t.false ( isDocumentType ( NaN ) );
    t.false ( isDocumentType ( '' ) );
    t.false ( isDocumentType ( args ) );
    t.false ( isDocumentType ( [1, 2, 3] ) );
    t.false ( isDocumentType ( true ) );
    t.false ( isDocumentType ( new Date () ) );
    t.false ( isDocumentType ( new Error () ) );
    t.false ( isDocumentType ( [].slice ) );
    t.false ( isDocumentType ( { 'a': 1 } ) );
    t.false ( isDocumentType ( 1 ) );
    t.false ( isDocumentType ( /x/ ) );
    t.false ( isDocumentType ( 'a' ) );
    t.false ( isDocumentType ( Symbol () ) );

  });

  test ( 'should return "false" for plain objects', t => {

    t.false ( isDocumentType ({ 'nodeType': 10 }) );
    t.false ( isDocumentType ({ 'nodeType': Object ( 10 ) }) );
    t.false ( isDocumentType ({ 'nodeType': true }) );
    t.false ( isDocumentType ({ 'nodeType': [10] }) );
    t.false ( isDocumentType ({ 'nodeType': '10' }) );
    t.false ( isDocumentType ({ 'nodeType': '010' }) );

  });

  test ( 'should work with a DOM document type from another realm', t => {

    t.true ( isDocumentType ( realm.documentType ) );

  });

});
