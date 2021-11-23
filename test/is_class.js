
/* IMPORT */

const {describe} = require ( 'fava' );
const {isClass} = require ( '../dist' );
const {args, realm} = require ( './_utils.js' );

/* MAIN */

describe ( 'isClass', test => {

  test ( 'should return "true" for classes', t => {

    t.true ( isClass ( class Foo {} ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isClass () );
    t.false ( isClass ( null ) );
    t.false ( isClass ( undefined ) );
    t.false ( isClass ( 0 ) );
    t.false ( isClass ( NaN ) );
    t.false ( isClass ( '' ) );
    t.false ( isClass ( args ) );
    t.false ( isClass ( [1] ) );
    t.false ( isClass ( new Error () ) );
    t.false ( isClass ( [].slice ) );
    t.false ( isClass ( { 'a': 1 } ) );
    t.false ( isClass ( 1 ) );
    t.false ( isClass ( /x/ ) );
    t.false ( isClass ( 'a' ) );
    t.false ( isClass ( Symbol () ) );
    t.false ( isClass ( isClass ) );

  });

  test ( 'should work with dates from another realm', t => {

    t.true ( isClass ( realm.class ) );

  });

});
