
/* IMPORT */

const {describe} = require ( 'fava' );
const {isSet} = require ( '../dist' );
const {args, realm} = require ( './_utils.js' );

/* MAIN */

describe ( 'isSet', test => {

  test ( 'should return "true" for sets', t => {

    t.true ( isSet ( new Set () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isSet () );
    t.false ( isSet ( null ) );
    t.false ( isSet ( undefined ) );
    t.false ( isSet ( false ) );
    t.false ( isSet ( 0 ) );
    t.false ( isSet ( NaN ) );
    t.false ( isSet ( '' ) );
    t.false ( isSet ( args ) );
    t.false ( isSet ( [1] ) );
    t.false ( isSet ( true ) );
    t.false ( isSet ( new Date () ) );
    t.false ( isSet ( new Error () ) );
    t.false ( isSet ( [].slice ) );
    t.false ( isSet ( { 'a': 1 } ) );
    t.false ( isSet ( 1 ) );
    t.false ( isSet ( /x/ ) );
    t.false ( isSet ( 'a' ) );
    t.false ( isSet ( Symbol () ) );
    t.false ( isSet ( new WeakSet () ) );

  });

  test ( 'should work with sets from another realm', t => {

    t.true ( isSet ( realm.set ) );

  });

});
