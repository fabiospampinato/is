
/* IMPORT */

const {describe} = require ( 'fava' );
const {isDate} = require ( '../dist' );
const {args, realm} = require ( './_utils.js' );

/* MAIN */

describe ( 'isDate', test => {

  test ( 'should return "true" for dates', t => {

    t.true ( isDate ( new Date () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isDate () );
    t.false ( isDate ( null ) );
    t.false ( isDate ( undefined ) );
    t.false ( isDate ( 0 ) );
    t.false ( isDate ( NaN ) );
    t.false ( isDate ( '' ) );
    t.false ( isDate ( args ) );
    t.false ( isDate ( [1] ) );
    t.false ( isDate ( new Error () ) );
    t.false ( isDate ( [].slice ) );
    t.false ( isDate ( { 'a': 1 } ) );
    t.false ( isDate ( 1 ) );
    t.false ( isDate ( /x/ ) );
    t.false ( isDate ( 'a' ) );
    t.false ( isDate ( Symbol () ) );

  });

  test ( 'should work with dates from another realm', t => {

    t.true ( isDate ( realm.date ) );

  });

});
