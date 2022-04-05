
/* IMPORT */

import {describe} from 'fava';
import {isString} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isString', test => {

  test ( 'should return "true" for strings', t => {

    t.true ( isString ( '' ) );
    t.true ( isString ( Object ( '' ) ) );
    t.true ( isString ( String ( '' ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isString () );
    t.false ( isString ( null ) );
    t.false ( isString ( undefined ) );
    t.false ( isString ( false ) );
    t.false ( isString ( 0 ) );
    t.false ( isString ( NaN ) );
    t.false ( isString ( args ) );
    t.false ( isString ( [1] ) );
    t.false ( isString ( true ) );
    t.false ( isString ( new Date () ) );
    t.false ( isString ( new Error () ) );
    t.false ( isString ( [].slice ) );
    t.false ( isString ( { 'a': 1 } ) );
    t.false ( isString ( 1 ) );
    t.false ( isString ( /x/ ) );
    t.false ( isString ( Symbol () ) );

  });

  test ( 'should work with strings from another realm', t => {

    t.true ( isString ( realm.string ) );

  });

});
