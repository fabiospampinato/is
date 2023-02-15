
/* IMPORT */

import {describe} from 'fava';
import {isNumberLike} from '../dist/index.js';
import {args} from './_utils.js';

/* MAIN */

describe ( 'isNumberLikeLike', test => {

  test ( 'should return "true" for number-like strings only', t => {

    const truthy = ['3', '2e30', '2e+30', '2e-30', '0xff', '-1.1', '0'];
    const falsy = ['NaN', '__test__', '123test', ''];

    truthy.forEach ( ( value ) => {
      t.true ( isNumberLike ( value ) );
    });

    falsy.forEach ( ( value ) => {
      t.false ( isNumberLike ( value ) );
    });

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isNumberLike () );
    t.false ( isNumberLike ( null ) );
    t.false ( isNumberLike ( undefined ) );
    t.false ( isNumberLike ( NaN ) );
    t.false ( isNumberLike ( '' ) );
    t.false ( isNumberLike ( args ) );
    t.false ( isNumberLike ( [] ) );
    t.false ( isNumberLike ( new Error () ) );
    t.false ( isNumberLike ( [].slice ) );
    t.false ( isNumberLike ( { 'a': 1 } ) );
    t.false ( isNumberLike ( /x/ ) );
    t.false ( isNumberLike ( 'a' ) );
    t.false ( isNumberLike ( Symbol () ) );

  });

});
