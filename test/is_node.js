
/* IMPORT */

import {describe} from 'fava';
import {isNode} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isNode', test => {

  test ( 'should return "true" for nodes', t => {

    class Node { nodeType = 6 }

    t.true ( isNode ( new Node () ) );

  });

  test ( 'should return "true" for non-plain objects', t => {

    function Node () {
      this.nodeType = 6;
    }

    t.true ( isNode ( new Node () ) );

  });

  test ( 'should return "false" for non DOM nodes', t => {

    t.false ( isNode () );
    t.false ( isNode ( null ) );
    t.false ( isNode ( undefined ) );
    t.false ( isNode ( false ) );
    t.false ( isNode ( 0 ) );
    t.false ( isNode ( NaN ) );
    t.false ( isNode ( '' ) );
    t.false ( isNode ( args ) );
    t.false ( isNode ( [1, 2, 3] ) );
    t.false ( isNode ( true ) );
    t.false ( isNode ( new Date () ) );
    t.false ( isNode ( new Error () ) );
    t.false ( isNode ( [].slice ) );
    t.false ( isNode ( { 'a': 1 } ) );
    t.false ( isNode ( 1 ) );
    t.false ( isNode ( /x/ ) );
    t.false ( isNode ( 'a' ) );
    t.false ( isNode ( Symbol () ) );

  });

  test ( 'should return "false" for plain objects', t => {

    t.false ( isNode ({ 'nodeType': 6 }) );
    t.false ( isNode ({ 'nodeType': Object ( 6 ) }) );
    t.false ( isNode ({ 'nodeType': true }) );
    t.false ( isNode ({ 'nodeType': [6] }) );
    t.false ( isNode ({ 'nodeType': '6' }) );
    t.false ( isNode ({ 'nodeType': '006' }) );

  });

  test ( 'should work with a DOM node from another realm', t => {

    t.true ( isNode ( realm.node ) );

  });

});
