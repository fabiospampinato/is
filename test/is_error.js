
/* IMPORT */

import {describe} from 'fava';
import {isError} from '../dist/index.js';
import {CustomError, args, errors, realm} from './_utils.js';

/* MAIN */

describe ( 'isError', test => {

  test ( 'should return "true" for errors', t => {

    errors.forEach ( error => {
      t.true ( isError ( error ) );
    });

  });

  test ( 'should return "true" for subclassed errors', t => {

    t.true ( isError ( new CustomError () ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isError () );
    t.false ( isError ( null ) );
    t.false ( isError ( undefined ) );
    t.false ( isError ( false ) );
    t.false ( isError ( 0 ) );
    t.false ( isError ( NaN ) );
    t.false ( isError ( '' ) );
    t.false ( isError ( args ) );
    t.false ( isError ( [1] ) );
    t.false ( isError ( true ) );
    t.false ( isError ( new Date () ) );
    t.false ( isError ( [].slice ) );
    t.false ( isError ( { 'a': 1 } ) );
    t.false ( isError ( 1 ) );
    t.false ( isError ( /x/ ) );
    t.false ( isError ( 'a' ) );
    t.false ( isError ( Symbol () ) );

  });

  test ( 'should return "false" for plain objects', t => {

    t.false ( isError ({ 'name': 'Error', 'message': '' }) );

  });

  test ( 'should work with errors from another realm', t => {

    realm.errors.forEach ( error => {
      t.true ( isError ( error ) );
    });

  });

});
