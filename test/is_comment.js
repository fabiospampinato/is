
/* IMPORT */

import {describe} from 'fava';
import {isComment} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isComment', test => {

  test ( 'should return "true" for comments', t => {

    class Comment { nodeType = 8 }

    t.true ( isComment ( new Comment () ) );

  });

  test ( 'should return "true" for non-plain objects', t => {

    function Foo () {
      this.nodeType = 8;
    }

    t.true ( isComment ( new Foo () ) );

  });

  test ( 'should return "false" for non DOM comments', t => {

    t.false ( isComment () );
    t.false ( isComment ( null ) );
    t.false ( isComment ( undefined ) );
    t.false ( isComment ( false ) );
    t.false ( isComment ( 0 ) );
    t.false ( isComment ( NaN ) );
    t.false ( isComment ( '' ) );
    t.false ( isComment ( args ) );
    t.false ( isComment ( [1, 2, 3] ) );
    t.false ( isComment ( true ) );
    t.false ( isComment ( new Date () ) );
    t.false ( isComment ( new Error () ) );
    t.false ( isComment ( [].slice ) );
    t.false ( isComment ( { 'a': 1 } ) );
    t.false ( isComment ( 1 ) );
    t.false ( isComment ( /x/ ) );
    t.false ( isComment ( 'a' ) );
    t.false ( isComment ( Symbol () ) );

  });

  test ( 'should return "false" for plain objects', t => {

    t.false ( isComment ({ 'nodeType': 8 }) );
    t.false ( isComment ({ 'nodeType': Object ( 8 ) }) );
    t.false ( isComment ({ 'nodeType': true }) );
    t.false ( isComment ({ 'nodeType': [8] }) );
    t.false ( isComment ({ 'nodeType': '8' }) );
    t.false ( isComment ({ 'nodeType': '008' }) );

  });

  test ( 'should work with a DOM comment from another realm', t => {

    t.true ( isComment ( realm.comment ) );

  });

});
