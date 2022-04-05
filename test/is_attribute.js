
/* IMPORT */

import {describe} from 'fava';
import {isAttribute} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isAttribute', test => {

  test ( 'should return "true" for attributes', t => {

    class Attr { nodeType = 2 }

    t.true ( isAttribute ( new Attr () ) );

  });

  test ( 'should return "true" for non-plain objects', t => {

    function Foo () {
      this.nodeType = 2;
    }

    t.true ( isAttribute ( new Foo () ) );

  });

  test ( 'should return "false" for non DOM attributes', t => {

    t.false ( isAttribute () );
    t.false ( isAttribute ( null ) );
    t.false ( isAttribute ( undefined ) );
    t.false ( isAttribute ( false ) );
    t.false ( isAttribute ( 0 ) );
    t.false ( isAttribute ( NaN ) );
    t.false ( isAttribute ( '' ) );
    t.false ( isAttribute ( args ) );
    t.false ( isAttribute ( [1, 2, 3] ) );
    t.false ( isAttribute ( true ) );
    t.false ( isAttribute ( new Date () ) );
    t.false ( isAttribute ( new Error () ) );
    t.false ( isAttribute ( [].slice ) );
    t.false ( isAttribute ( { 'a': 1 } ) );
    t.false ( isAttribute ( 1 ) );
    t.false ( isAttribute ( /x/ ) );
    t.false ( isAttribute ( 'a' ) );
    t.false ( isAttribute ( Symbol () ) );

  });

  test ( 'should return "false" for plain objects', t => {

    t.false ( isAttribute ({ 'nodeType': 2 }) );
    t.false ( isAttribute ({ 'nodeType': Object ( 2 ) }) );
    t.false ( isAttribute ({ 'nodeType': true }) );
    t.false ( isAttribute ({ 'nodeType': [2] }) );
    t.false ( isAttribute ({ 'nodeType': '2' }) );
    t.false ( isAttribute ({ 'nodeType': '002' }) );

  });

  test ( 'should work with a DOM attribute from another realm', t => {

    t.true ( isAttribute ( realm.attribute ) );

  });

});
