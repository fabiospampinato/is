
/* IMPORT */

const {describe} = require ( 'fava' );
const {isEven} = require ( '../dist' );
const {args, realm} = require ( './_utils.js' );

/* MAIN */

describe ( 'isEven', test => {

  test ( 'should return "true" for even integers', t => {

    t.true ( isEven ( -100 ) );
    t.true ( isEven ( 0 ) );
    t.true ( isEven ( 100 ) );
    t.true ( isEven ( Number ( 0 ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isEven () );
    t.false ( isEven ( null ) );
    t.false ( isEven ( undefined ) );
    t.false ( isEven ( NaN ) );
    t.false ( isEven ( '' ) );
    t.false ( isEven ( args ) );
    t.false ( isEven ( [1] ) );
    t.false ( isEven ( new Error () ) );
    t.false ( isEven ( [].slice ) );
    t.false ( isEven ( { 'a': 1 } ) );
    t.false ( isEven ( /x/ ) );
    t.false ( isEven ( 'a' ) );
    t.false ( isEven ( Symbol () ) );
    t.false ( isEven ( -Infinity ) );
    t.false ( isEven ( Infinity ) );
    t.false ( isEven ( Object ( 0 ) ) );
    t.false ( isEven ( 1 ) );
    t.false ( isEven ( -1 ) );
    t.false ( isEven ( 2.1 ) );
    t.false ( isEven ( -2.1 ) );
    t.false ( isEven ( -1.2 ) );
    t.false ( isEven ( 1.2 ) );

  });

  test ( 'should work with numbers from another realm', t => {

    t.true ( isEven ( realm.even ) );

  });

});
