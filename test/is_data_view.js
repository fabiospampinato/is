
/* IMPORT */

import {describe} from 'fava';
import {isDataView} from '../dist/index.js';
import {args, realm} from './_utils.js';

/* MAIN */

describe ( 'isDataView', test => {

  test ( 'should return "true" for DataViews', t => {

    t.true ( isDataView ( new DataView ( new ArrayBuffer ( 2 ) ) ) );

  });

  test ( 'should return "false" for everything else', t => {

    t.false ( isDataView () );
    t.false ( isDataView ( null ) );
    t.false ( isDataView ( undefined ) );
    t.false ( isDataView ( false ) );
    t.false ( isDataView ( 0 ) );
    t.false ( isDataView ( NaN ) );
    t.false ( isDataView ( '' ) );
    t.false ( isDataView ( args ) );
    t.false ( isDataView ( [1] ) );
    t.false ( isDataView ( true ) );
    t.false ( isDataView ( new Date () ) );
    t.false ( isDataView ( new Error () ) );
    t.false ( isDataView ( [].slice ) );
    t.false ( isDataView ( { 'a': 1 } ) );
    t.false ( isDataView ( 1 ) );
    t.false ( isDataView ( /x/ ) );
    t.false ( isDataView ( 'a' ) );
    t.false ( isDataView ( Symbol () ) );
    t.false ( isDataView ( new ArrayBuffer ( 2 ) ) );
    t.false ( isDataView ( new BigInt64Array () ) );
    t.false ( isDataView ( new BigUint64Array () ) );
    t.false ( isDataView ( new Float32Array () ) );
    t.false ( isDataView ( new Float64Array () ) );
    t.false ( isDataView ( new Int8Array () ) );
    t.false ( isDataView ( new Int16Array () ) );
    t.false ( isDataView ( new Int32Array () ) );
    t.false ( isDataView ( new Uint8Array () ) );
    t.false ( isDataView ( new Uint8ClampedArray () ) );
    t.false ( isDataView ( new Uint16Array () ) );
    t.false ( isDataView ( new Uint32Array () ) );

  });

  test ( 'should work with DataViews from another realm', t => {

    t.true ( isDataView ( realm.dataview ) );

  });

});
