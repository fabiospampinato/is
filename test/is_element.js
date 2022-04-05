
/* IMPORT */

import {describe} from 'fava';
import {isElement} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isElement', test => {

  test ( 'should return "true" for elements', t => {

    class Ele { nodeType = 1 }

    t.true ( isElement ( new Ele () ) );

  });

  test ( 'should return "true" for non-plain objects', t => {

    function Foo () {
      this.nodeType = 1;
    }

    t.true ( isElement ( new Foo () ) );

  });

  test ( 'should return "false" for non DOM elements', t => {

    t.false ( isElement () );
    t.false ( isElement ( null ) );
    t.false ( isElement ( undefined ) );
    t.false ( isElement ( false ) );
    t.false ( isElement ( 0 ) );
    t.false ( isElement ( NaN ) );
    t.false ( isElement ( '' ) );
    t.false ( isElement ( args ) );
    t.false ( isElement ( [1, 2, 3] ) );
    t.false ( isElement ( true ) );
    t.false ( isElement ( new Date () ) );
    t.false ( isElement ( new Error () ) );
    t.false ( isElement ( [].slice ) );
    t.false ( isElement ( { 'a': 1 } ) );
    t.false ( isElement ( 1 ) );
    t.false ( isElement ( /x/ ) );
    t.false ( isElement ( 'a' ) );
    t.false ( isElement ( Symbol () ) );

  });

  test ( 'should return "false" for plain objects', t => {

    t.false ( isElement ({ 'nodeType': 1 }) );
    t.false ( isElement ({ 'nodeType': Object ( 1 ) }) );
    t.false ( isElement ({ 'nodeType': true }) );
    t.false ( isElement ({ 'nodeType': [1] }) );
    t.false ( isElement ({ 'nodeType': '1' }) );
    t.false ( isElement ({ 'nodeType': '001' }) );

  });

  test ( 'should work with a DOM element from another realm', t => {

    t.true ( isElement ( realm.element ) );

  });

});
