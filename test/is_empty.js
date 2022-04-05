
/* IMPORT */

import {describe} from 'fava';
import {isEmpty} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isEmpty', test => {

  test ( 'should return "true" for empty values', t => {

    t.true ( isEmpty () );
    t.true ( isEmpty ( null ) );
    t.true ( isEmpty ( undefined ) );
    t.true ( isEmpty ( false ) );
    t.true ( isEmpty ( 0 ) );
    t.true ( isEmpty ( NaN ) );
    t.true ( isEmpty ( '' ) );
    t.true ( isEmpty ( [] ) );
    t.true ( isEmpty ( {} ) );
    t.true ( isEmpty ( true ) );
    t.true ( isEmpty ( [].slice ) );
    t.true ( isEmpty ( 1 ) );
    t.true ( isEmpty ( NaN ) );
    t.true ( isEmpty ( /x/ ) );
    t.true ( isEmpty ( Symbol () ) );
    t.true ( isEmpty ( Buffer.from ( '' ) ) );

  });

  test ( 'should return "false" for non-empty values', t => {

    t.false ( isEmpty ( [0] ) );
    t.false ( isEmpty ({ 'a': 0 }) );
    t.false ( isEmpty ( 'a' ) );

  });

  test ( 'should work with an object that has a "length" property', t => {

    t.false ( isEmpty ({ 'length': 0 }) );

  });

  test ( 'should work with "arguments" objects', t => {

    t.false ( isEmpty ( args ) );

  });

  test ( 'should work with prototype objects', t => {

    function Foo () {}
    Foo.prototype = { 'constructor': Foo };

    t.true ( isEmpty ( Foo.prototype ) );

    Foo.prototype.a = 1;

    t.false ( isEmpty ( Foo.prototype ) );

  });

  test ( 'should work with jQuery/MooTools DOM query collections', t => {

    function Foo ( elements ) {
      [].push.apply ( this, elements );
    }
    Foo.prototype = { 'length': 0, 'splice': [].splice };

    t.true ( isEmpty ( new Foo ( [] ) ) );

  });

  test ( 'should work with maps', t => {

    for ( const map of [new Map (), realm.map] ) {

      t.true ( isEmpty ( map ) );

      map.set ( 'a', 1 );

      t.false ( isEmpty ( map ) );

      map.clear ();

    }

  });

  test ( 'should work with sets', t => {

    for ( const set of [new Set (), realm.set] ) {

      t.true ( isEmpty ( set ) );

      set.add ( 1 );

      t.false ( isEmpty ( set ) );

      set.clear ();

    }

  });

  test ( 'should not treat objects with negative lengths as array-like', t => {

    function Foo () {}
    Foo.prototype.length = -1;

    t.true ( isEmpty ( new Foo () ) );

  });

  test ( 'should not treat objects with lengths larger than "MAX_SAFE_INTEGER" as array-like', t => {

    function Foo () {}
    Foo.prototype.length = Number.MAX_SAFE_INTEGER + 1;

    t.true ( isEmpty ( new Foo () ) );

  });

  test ( 'should not treat objects with non-number lengths as array-like', t => {

    t.false ( isEmpty ({ 'length': '0' }) );

  });

});
