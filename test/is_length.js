
/* IMPORT */

const {describe} = require ( 'fava' );
const {isLength} = require ( '../dist' );

/* MAIN */

describe ( 'isLength', test => {

  test ( 'should return "true" for lengths', t => {

    for ( const value of [0, 3, Number.MAX_SAFE_INTEGER] ) {

      t.true ( isLength ( value ) );

    }

  });

  test ( 'should return "false" for non-lengths', t => {

    for ( const value of [-1, '1', 1.1, Number.MAX_SAFE_INTEGER + 1] ) {

      t.false ( isLength ( value ) );

    }

  });

});
