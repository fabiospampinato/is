
/* IMPORT */

import {describe} from 'fava';
import {isText} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isText', test => {

  test ( 'should return "true" for texts', t => {

    class Text { nodeType = 3 }

    t.true ( isText ( new Text () ) );

  });

  test ( 'should return "true" for non-plain objects', t => {

    function Foo () {
      this.nodeType = 3;
    }

    t.true ( isText ( new Foo () ) );

  });

  test ( 'should return "false" for non DOM texts', t => {

    t.false ( isText () );
    t.false ( isText ( null ) );
    t.false ( isText ( undefined ) );
    t.false ( isText ( false ) );
    t.false ( isText ( 0 ) );
    t.false ( isText ( NaN ) );
    t.false ( isText ( '' ) );
    t.false ( isText ( args ) );
    t.false ( isText ( [1, 2, 3] ) );
    t.false ( isText ( true ) );
    t.false ( isText ( new Date () ) );
    t.false ( isText ( new Error () ) );
    t.false ( isText ( [].slice ) );
    t.false ( isText ( { 'a': 1 } ) );
    t.false ( isText ( 1 ) );
    t.false ( isText ( /x/ ) );
    t.false ( isText ( 'a' ) );
    t.false ( isText ( Symbol () ) );

  });

  test ( 'should return "false" for plain objects', t => {

    t.false ( isText ({ 'nodeType': 3 }) );
    t.false ( isText ({ 'nodeType': Object ( 3 ) }) );
    t.false ( isText ({ 'nodeType': true }) );
    t.false ( isText ({ 'nodeType': [3] }) );
    t.false ( isText ({ 'nodeType': '3' }) );
    t.false ( isText ({ 'nodeType': '003' }) );

  });

  test ( 'should work with a DOM text from another realm', t => {

    t.true ( isText ( realm.text ) );

  });

});
