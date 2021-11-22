
/* IMPORT */

const {describe} = require ( 'fava' );
const _ = require ( '../dist' );
const {args, realm} = require ( './_utils.js' );

/* MAIN */

describe ( 'isPlainObject', test => {

  test ( 'should return "true" for objects', t => {

    t.true ( _.isPlainObject ( {} ) );
    t.true ( _.isPlainObject ( Object.create ( null ) ) );
    t.true ( _.isPlainObject ( { x: 0, y: 0 } ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( _.isPlainObject () );
    t.false ( _.isPlainObject ( null ) );
    t.false ( _.isPlainObject ( undefined ) );
    t.false ( _.isPlainObject ( false ) );
    t.false ( _.isPlainObject ( 0 ) );
    t.false ( _.isPlainObject ( NaN ) );
    t.false ( _.isPlainObject ( '' ) );
    t.false ( _.isPlainObject ( args ) );
    t.false ( _.isPlainObject ( [1] ) );
    t.false ( _.isPlainObject ( true ) );
    t.false ( _.isPlainObject ( new Date () ) );
    t.false ( _.isPlainObject ( new Error () ) );
    t.false ( _.isPlainObject ( [].slice ) );
    t.false ( _.isPlainObject ( 1 ) );
    t.false ( _.isPlainObject ( /x/ ) );
    t.false ( _.isPlainObject ( 'a' ) );
    t.false ( _.isPlainObject ( Symbol () ) );

  });

  test ( 'should work with objects from another realm', t => {

    t.true ( _.isPlainObject ( realm.object ) );

  });

});
