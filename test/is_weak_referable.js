
/* IMPORT */

import {describe} from 'fava';
import {isWeakReferable} from '../dist/index.js';
import {realm} from './_utils.js';

/* MAIN */

describe ( 'isWeakReferable', test => {

  test ( 'should return "true" for weak referable values', t => {

    t.true ( isWeakReferable ( {} ) );
    t.true ( isWeakReferable ( () => {} ) );
    // t.true ( isWeakReferable ( Symbol () ) ); //TODO: Enable this once the runtime supports it

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isWeakReferable () );
    t.false ( isWeakReferable ( null ) );
    t.false ( isWeakReferable ( undefined ) );
    t.false ( isWeakReferable ( false ) );
    t.false ( isWeakReferable ( 0 ) );
    t.false ( isWeakReferable ( NaN ) );
    t.false ( isWeakReferable ( '' ) );
    t.false ( isWeakReferable ( true ) );
    t.false ( isWeakReferable ( 1 ) );
    t.false ( isWeakReferable ( 'a' ) );
    t.false ( isWeakReferable ( Symbol.for ( 'global' ) ) );

  });

  test ( 'should work with weak referable values from another realm', t => {

    t.true ( isWeakReferable ( realm.object ) );
    t.true ( isWeakReferable ( realm.function ) );

    t.false ( isWeakReferable ( realm.null ) );
    t.false ( isWeakReferable ( realm.undefined ) );

  });

});
