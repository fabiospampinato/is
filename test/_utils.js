
/* MAIN */

class CustomError extends Error {}

const args = (function () { return arguments; }( 1, 2, 3 ));

const errors = [new Error (), new EvalError (), new RangeError (), new ReferenceError (), new SyntaxError (), new TypeError (), new URIError ()];

const realm = require ( 'vm' ).runInNewContext ( /* javascript */`
  (function () {
    return {
      'ArrayBuffer': ArrayBuffer,
      'Float32Array': Float32Array,
      'Float64Array': Float64Array,
      'Int8Array': Int8Array,
      'Int16Array': Int16Array,
      'Int32Array': Int32Array,
      'Uint8Array': Uint8Array,
      'Uint8ClampedArray': Uint8ClampedArray,
      'Uint16Array': Uint16Array,
      'Uint32Array': Uint32Array,
      'DataView': DataView,
      'arrayBuffer': new ArrayBuffer ( 2 ),
      'float32array': new Float32Array ( new ArrayBuffer ( 24 ) ),
      'float64array': new Float64Array ( new ArrayBuffer ( 24 ) ),
      'int8array': new Int8Array ( new ArrayBuffer ( 24 ) ),
      'int16array': new Int16Array ( new ArrayBuffer ( 24 ) ),
      'int32array': new Int32Array ( new ArrayBuffer ( 24 ) ),
      'uint8array': new Uint8Array ( new ArrayBuffer ( 24 ) ),
      'uint8clampedarray': new Uint8ClampedArray ( new ArrayBuffer ( 24 ) ),
      'uint16array': new Uint16Array ( new ArrayBuffer ( 24 ) ),
      'uint32array': new Uint32Array ( new ArrayBuffer ( 24 ) ),
      'bigint64array': new BigInt64Array ( new ArrayBuffer ( 24 ) ),
      'biguint64array': new BigUint64Array ( new ArrayBuffer ( 24 ) ),
      'dataview': new DataView ( new ArrayBuffer ( 24 ) ),
      'arguments': (function () { return arguments; }( 1, 2, 3 )),
      'array': [1],
      'boolean': Object ( false ),
      'date': new Date (),
      'element': new (class Ele { nodeType = 1 }) (),
      'errors': [new Error (), new EvalError (), new RangeError (), new ReferenceError (), new SyntaxError (), new TypeError (), new URIError ()],
      'float': Number ( 0.1 ),
      'function': function () {},
      'integer': Number ( 0 ),
      'map': new Map (),
      'nan': NaN,
      'null': null,
      'number': Object ( 0 ),
      'bigint': 0n,
      'object': { 'a': 1 },
      'promise': Promise.resolve ( 1 ),
      'regexp': /x/,
      'set': new Set (),
      'string': Object ( 'a' ),
      'symbol': Symbol (),
      'undefined': undefined,
      'weakMap': new WeakMap (),
      'weakSet': new WeakSet ()
    };
  }())
`);

/* EXPORT */

module.exports = {
  CustomError,
  args,
  errors,
  realm
};
