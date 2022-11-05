
/* IMPORT */

import vm from 'vm';

/* MAIN */

class CustomError extends Error {}

const args = (function () { return arguments; }( 1, 2, 3 ));

const errors = [new Error (), new EvalError (), new RangeError (), new ReferenceError (), new SyntaxError (), new TypeError (), new URIError ()];

const realm = vm.runInNewContext ( /* javascript */`
  (function () {
    class Blob {
      get [Symbol.toStringTag] () {
        return 'Blob';
      }
    }
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
      'arrowFunction': () => {},
      'asyncFunction': async () => {},
      'asyncGeneratorFunction': async function* () {},
      'asyncIterable': { async * [Symbol.asyncIterator]() { yield 'hello'; } },
      'blob': new Blob (),
      'boolean': Object ( false ),
      'boundFunction': (function () {}).bind ( this ),
      'boxedBigint': Object ( 123n ),
      'boxedTrue': Object ( true ),
      'boxedFalse': Object ( false ),
      'boxedNumber': Object ( 123 ),
      'boxedString': Object ( 'foo' ),
      'boxedSymbol': Object ( Symbol () ),
      'unboxedBigint': 123n,
      'unboxedTrue': true,
      'unboxedFalse': false,
      'unboxedNumber': 123,
      'unboxedString': 'foo',
      'unboxedSymbol': Symbol (),
      'class': class Foo {},
      'date': new Date (),
      'element': new (class Ele { nodeType = 1 }) (),
      'attribute': new (class Attr { nodeType = 2 }) (),
      'node': new (class Node { nodeType = 6 }) (),
      'text': new (class Text { nodeType = 3 }) (),
      'comment': new (class Comment { nodeType = 8 }) (),
      'document': new (class Document { nodeType = 9 }) (),
      'documentType': new (class DocumentType { nodeType = 10 }) (),
      'documentFragment': new (class DocumentFragment { nodeType = 11 }) (),
      'errors': [new Error (), new EvalError (), new RangeError (), new ReferenceError (), new SyntaxError (), new TypeError (), new URIError ()],
      'even': Number ( 2 ),
      'float': Number ( 0.1 ),
      'function': function () {},
      'generatorFunction': function* () {},
      'integer': Number ( 0 ),
      'map': new Map (),
      'nan': NaN,
      'negzero': Number ( -0 ),
      'null': null,
      'number': Object ( 0 ),
      'bigint': 0n,
      'object': { 'a': 1 },
      'odd': Number ( 1 ),
      'promise': Promise.resolve ( 1 ),
      'regexp': /x/,
      'set': new Set (),
      'sharedArrayBuffer': new SharedArrayBuffer ( 2 ),
      'string': Object ( 'a' ),
      'symbol': Symbol (),
      'undefined': undefined,
      'weakMap': new WeakMap (),
      'weakRef': new WeakRef ( WeakRef ),
      'weakSet': new WeakSet ()
    };
  }())
`);

/* EXPORT */

export {
  CustomError,
  args,
  errors,
  realm
};
