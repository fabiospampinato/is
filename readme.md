# Is

The definitive collection of is* functions for runtime type checking. Lodash-compatible, tree-shakable, with types.

## Features

- **Lodash-compatible**: The provided functions are compatible with lodash's, so they can be used as drop-in replacements. This includes non-obvious things like being able to work with polyfilled builtins, not throwing in old environments where things like Map aren't available, working with objects from other realms, working with weird things like `Boolean ( true )` and `Object ( true )`, and being isomorphic.
- **Types**: Good TypeScript types ship with the library rather than being an afterthought. Also more subtlety this means that some extra functions like `isFalsy` and `isTruthy` are provided because their return type is useful for type checking, for lodash it doesn't make much sense to provide these functions because all their value is in the type system, and lodash doesn't care about that.
- **Modern**: Some functions have been updated to account for bigints and some addititional ones have been added, the library is tree-shakable so you only pay for what you use.
- **Focused**: Every function provided accepts a single argument of unknown type and returns a boolean, almost always as a TypeScript type guard.

## Install

```sh
npm install --save is@npm:@fabiospampinato/is
```

## Usage

#### `isArguments`

Checks if a value is an arguments object.

```ts
import {isArguments} from 'is';

const args = (function () { return arguments; })();

isArguments ( args ); // => true
isArguments ( [] ); // => false
```

#### `isArrayBuffer`

Checks if a value is an ArrayBuffer object.

```ts
import {isArrayBuffer} from 'is';

isArrayBuffer ( new ArrayBuffer ( 8 ) ); // => true
isArrayBuffer ( [] ); // => false
```

#### `isArrayLikeObject`

Checks if a value is an Array-like object, meaning a non-string and non-function with an integer `length` property.

```ts
import {isArrayLikeObject} from 'is';

isArrayLikeObject ( [] ); // => true
isArrayLikeObject ( { length: 1 } ); // => true
isArrayLikeObject ( 'foo' ); // => false
isArrayLikeObject ( isArrayLikeObject ); // => false
```

#### `isArrayLike`

Checks if a value is an Array-like object, meaning a non-function with an integer `length` property.

```ts
import {isArrayLike} from 'is';

isArrayLike ( [] ); // => true
isArrayLike ( { length: 1 } ); // => true
isArrayLike ( 'foo' ); // => true
isArrayLike ( isArrayLike ); // => false
```

#### `isArray`

Checks if a value is an Array.

```ts
import {isArray} from 'is';

isArray ( [] ); // => true
isArray ( {} ); // => false
```

#### `isArrowFunction` 🆕

Checks if a value is an arrow function. There's a detectable difference between regular and arrow functions.

```ts
import {isArrowFunction} from 'is';

isArrowFunction ( () => {} ); // => true
isArrowFunction ( function () {} ); // => false
```

#### `isAsyncFunction` 🆕

Checks if a value is an async function. Note that this will return false for async _generator_ functions.

```ts
import {isAsyncFunction} from 'is';

isAsyncFunction ( async () => {} ); // => true
isAsyncFunction ( () => {} ); // => false
```

#### `isAsyncGeneratorFunction` 🆕

Checks if a value is an async generator function.

```ts
import {isAsyncGeneratorFunction} from 'is';

isAsyncGeneratorFunction ( function* () {} ); // => true
isAsyncGeneratorFunction ( function () {} ); // => false
```

#### `isAsyncIterable` 🆕

Checks if a value is an async iterable.

```ts
import {isAsyncIterable} from 'is';

const myAsyncIterable = {
  async * [Symbol.asyncIterator]() {
    yield 'hello';
  }
};

isAsyncIterable ( myAsyncIterable ); // => true
isAsyncIterable ( [] ); // => false
```

#### `isAttribute` 🆕

Checks if a value is likely a DOM attribute.

```ts
import {isAttribute} from 'is';

isAttribute ( document.createAttribute ( 'foo' ) ); // => true
isAttribute ( body ); // => false
```

#### `isBigInt` 🆕

Checks if a value is a bigint.

```ts
import {isBigInt} from 'is';

isBigInt ( 0n ); // => true
isBigInt ( 0 ); // => false
```

#### `isBigInt64Array` 🆕

Checks if a value is a BigInt64Array.

```ts
import {isBigInt64Array} from 'is';

isBigInt64Array ( new BigInt64Array () ); // => true
isBigInt64Array ( [] ); // => false
```

#### `isBigUint64Array` 🆕

Checks if a value is a BigUint64Array.

```ts
import {isBigUint64Array} from 'is';

isBigUint64Array ( new BigUint64Array () ); // => true
isBigUint64Array ( [] ); // => false
```

#### `isBlob` 🆕

Checks if a value is a Blob.

```ts
import {isBlob} from 'is';

isBlob ( new Blob ( [] ) ); // => true
isBlob ( [] ); // => false
```

#### `isBoolean`

Checks if a value is a boolean.

```ts
import {isBoolean} from 'is';

isBoolean ( true ); // => true
isBoolean ( false ); // => true
isBoolean ( 0 ); // => false;
```

#### `isBoundFunction` 🆕

Checks if a value is a bound function.

```ts
import {isBoundFunction} from 'is';

isBoundFunction ( (function () {}).bind ( this ) ); // => true
isBoundFunction ( () => {} ); // => true
isBoundFunction ( function () {} ); // => false
```

#### `isBoxedBigInt` 🆕

Check if a value is a boxed bigint.

```ts
import {isBoxedBigInt} from 'is';

isBoxedBigInt ( 0n ); // => false
isBoxedBigInt ( Object ( 0n ) ); // => true
```

#### `isBoxedBoolean` 🆕

Check if a value is a boxed boolean.

```ts
import {isBoxedBoolean} from 'is';

isBoxedBoolean ( true ); // => false
isBoxedBoolean ( Object ( true ) ); // => true
```

#### `isBoxedNumber` 🆕

Check if a value is a boxed number.

```ts
import {isBoxedNumber} from 'is';

isBoxedNumber ( 0 ); // => false
isBoxedNumber ( Object ( 0 ) ); // => true
```

#### `isBoxedPrimitive` 🆕

Check if a value is a boxed primitive.

```ts
import {isBoxedPrimitive} from 'is';

isBoxedPrimitive ( 0 ); // => false
isBoxedPrimitive ( Object ( 0 ) ); // => true
isBoxedPrimitive ( Object ( 0n ) ); // => true
```

#### `isBoxedString` 🆕

Check if a value is a boxed string.

```ts
import {isBoxedString} from 'is';

isBoxedString ( 'foo' ); // => false
isBoxedString ( Object ( 'foo' ) ); // => true
```

#### `isBoxedSymbol` 🆕

Check if a value is a boxed symbol.

```ts
import {isBoxedSymbol} from 'is';

isBoxedSymbol ( Symbol () ); // => false
isBoxedSymbol ( Object ( Symbol () ) ); // => true
```

#### `isBuffer`

Checks if a value is a Buffer.

```ts
import {isBuffer} from 'is';

isBuffer ( Buffer.from ( '' ) ); // => true
isBuffer ( [] ); // => false
```

#### `isClass` 🆕

Checks if a value is an ES6 class. Note that classes lowered to work in ES5 are not actual classes anymore, there's a detectable difference when the `class` keyword is used.

```ts
import {isClass} from 'is';

isClass ( class Foo {} ); // => true
isClass ( isClass ); // => false
```

#### `isComment` 🆕

Checks if a value is likely a DOM comment.

```ts
import {isComment} from 'is';

isComment ( document.createComment ( 'foo' ) ); // => true
isComment ( body ); // => false
```

#### `isDataView` 🆕

Checks if a value is a DataView.

```ts
import {isDataView} from 'is';

isDataView ( new DataView ( new ArrayBuffer ( 2 ) ) ); // => true
isDataView ( [] ); // => false
```

#### `isDate`

Checks if a value is a Date.

```ts
import {isDate} from 'is';

isDate ( new Date () ); // => true
isDate ( 0 ); // => false
```

#### `isDocument` 🆕

Checks if a value is likely a DOM document.

```ts
import {isDocument} from 'is';

isDocument ( document ); // => true
isDocument ( window ); // => false
```

#### `isDocumentFragment` 🆕

Checks if a value is likely a DOM document fragment.

```ts
import {isDocumentFragment} from 'is';

isDocumentFragment ( new DocumentFragment () ); // => true
isDocumentFragment ( document ); // => false
```

#### `isDocumentType` 🆕

Checks if a value is likely a DOM document type.

```ts
import {isDocumentType} from 'is';

isDocumentType ( document.doctype ); // => true
isDocumentType ( document ); // => false
```

#### `isElement`

Checks if a value is likely a DOM element.

```ts
import {isElement} from 'is';

isElement ( body ); // => true
isElement ( window ); // => false
```

#### `isEmpty`

Checks if a value is an empty array, string, buffer, typed array, arguments object, map, set, prototype or regular object.

```ts
import {isEmpty} from 'is';

isEmpty ( [] ); // => true
isEmpty ( {} ); // => true
isEmpty ( 123 ); // => true
isEmpty ( [123] ); // => false
```

#### `isError`

Checks if a value is an Error.

```ts
import {isError} from 'is';

isError ( new Error () ); // => true
isError ( { message: 'asd' } ); // => false
```

#### `isEven` 🆕

Checks if a value is an even integer.

```ts
import {isEven} from 'is';

isEven ( 2 ); // => true
isEven ( 1 ); // => false
```

#### `isFalsy` 🆕

Checks if a value is falsy.

```ts
import {isFalsy} from 'is';

isFalsy ( 0 ); // => true
isFalsy ( '' ); // => true
isFalsy ( [] ); // => false
```

#### `isFinite`

Checks if a value is a finite number.

```ts
import {isFinite} from 'is';

isFinite ( 0 ); // => true
isFinite ( Infinity ); // => false
isFinite ( -Infinity ); // => false
isFinite ( NaN ); // => false
```

#### `isFloat` 🆕

Checks if a value is a float.

```ts
import {isFloat} from 'is';

isFloat ( 1.2 ); // => true
isFloat ( 0 ); // => false
isFloat ( -1 ); // => false
```

#### `isFloat32Array` 🆕

Checks if a value is a Float32Array.

```ts
import {isFloat32Array} from 'is';

isFloat32Array ( new Float32Array () ); // => true
isFloat32Array ( [] ); // => false
```

#### `isFloat64Array` 🆕

Checks if a value is a Float64Array.

```ts
import {isFloat64Array} from 'is';

isFloat64Array ( new Float64Array () ); // => true
isFloat64Array ( [] ); // => false
```

#### `isFrozen` 🆕

Checks if a value is frozen.

```ts
import {isFrozen} from 'is';

isFrozen ( Object.freeze ( {} ) ); // => true
isFrozen ( {} ); // => false
```

#### `isFunction`

Checks if a value is a function.

```ts
import {isFunction} from 'is';

isFunction ( isFunction ); // => true
isFunction ( { call: () => {} } ); // => false
```

#### `isGeneratorFunction` 🆕

Checks if a value is a generator function. Note that this will return false for _async_ generator functions.

```ts
import {isGeneratorFunction} from 'is';

isGeneratorFunction ( function* () {} ); // => true
isGeneratorFunction ( function () {} ); // => false
```

#### `isInt8Array` 🆕

Checks if a value is a Int8Array.

```ts
import {isInt8Array} from 'is';

isInt8Array ( new Int8Array () ); // => true
isInt8Array ( [] ); // => false
```

#### `isInt16Array` 🆕

Checks if a value is a Int16Array.

```ts
import {isInt16Array} from 'is';

isInt16Array ( new Int16Array () ); // => true
isInt16Array ( [] ); // => false
```

#### `isInt32Array` 🆕

Checks if a value is a Int32Array.

```ts
import {isInt32Array} from 'is';

isInt32Array ( new Int32Array () ); // => true
isInt32Array ( [] ); // => false
```

#### `isInteger`

Checks if a value is an integer.

```ts
import {isInteger} from 'is';

isInteger ( 0 ); // => true
isInteger ( -1 ); // => true
isInteger ( 1.2 ); // => false
```

#### `isIterable` 🆕

Checks if a value is an iterable.

```ts
import {isIterable} from 'is';

isIterable ( [] ); // => true
isIterable ( {} ); // => false
```

#### `isLength`

Checks if a value could be a valid length index.

```ts
import {isLength} from 'is';

isLength ( 0 ); // => true
isLength ( -1 ); // => false
isLength ( 1.2 ); // => false
isLength ( Infinity ); // => false
```

#### `isMap`

Checks if a value is a Map.

```ts
import {isMap} from 'is';

isMap ( new Map () ); // => true
isMap ( {} ); // => false
```

#### `isNaN`

Checks if a value is exactly NaN.

```ts
import {isNaN} from 'is';

isNaN ( NaN ); // => true
isNaN ( undefined ); // => false
```

#### `isNative`

Checks if a value is likely a native function.

```ts
import {isNative} from 'is';

isNative ( [].push ); // => true
isNative ( isNative ); // => false
```

#### `isNegativeZero` 🆕

Checks if a value is a negative zero, which if you didn't know is detectably different from a positive zero, for real.

```ts
import {isNegativeZero} from 'is';

isNegativeZero ( -0 ); // => true
isNegativeZero ( 0 ); // => false
```

#### `isNil`

Checks if a value is null or undefined.

```ts
import {isNil} from 'is';

isNil ( null ); // => true
isNil ( undefined ); // => true
isNil ( {} ); // => false
```

#### `isNode` 🆕

Checks if a value is likely a DOM node.

```ts
import {isNode} from 'is';

isNode ( document.body ); // => true
isNode ( undefined ); // => false
```

#### `isNull`

Checks if a value is null.

```ts
import {isNull} from 'is';

isNull ( null ); // => true
isNull ( undefined ); // => false
```

#### `isNumber`

Checks if a value is a number.

```ts
import {isNumber} from 'is';

isNumber ( 0 ); // => true
isNumber ( Infinity ); // => true
isNumber ( -Infinity ); // => true
isNumber ( NaN ); // => true
isNumber ( '0' ); // => false
```

#### `isNumberLike` 🆕

Checks if a string can be safely converted to a number.

```ts
import {isNumberLike} from 'is';

isNumberLike ( '3' ); // => true
isNumberLike ( '12.3' ); // => true
isNumberLike ( '1e100' ); // => true
isNumberLike ( '0xff' ); // => true
isNumberLike ( 'foo' ); // => false
```

#### `isObjectLike`

Checks if a value is an object (not necessarily a plain object).

```ts
import {isObjectLike} from 'is';

isObjectLike ( {} ); // => true
isObjectLike ( [] ); // => true
isObjectLike ( isObjectLike ); // => false
```

#### `isObject`

Checks if a value is not a primitive. This is the opposite of isPrimitive.

```ts
import {isObject} from 'is';

isObject ( {} ); // => true
isObject ( [] ); // => true
isObject ( isObject ); // => true
isObject ( 123 ); // => false
```

#### `isOdd` 🆕

Checks if a value is an odd integer.

```ts
import {isOdd} from 'is';

isOdd ( 1 ); // => true
isOdd ( 2 ); // => false
```

#### `isPlainObject`

Checks if a value is a plain object.

```ts
import {isPlainObject} from 'is';

isPlainObject ( {} ); // => true
isPlainObject ( [] ); // => false
isPlainObject ( isPlainObject ); // => false
```

#### `isPrimitive` 🆕

Checks if a value is a primitive. This is the opposite of isObject.

```ts
import {isPrimitive} from 'is';

isPrimitive ( null ); // => true
isPrimitive ( undefined ); // => true
isPrimitive ( '' ); // => true
isPrimitive ( 0 ); // => true
isPrimitive ( 0n ); // => true
isPrimitive ( true ); // => true
isPrimitive ( Symbol () ); // => true
isPrimitive ( {} ); // => false
isPrimitive ( isPrimitive ); // => false
```

#### `isPromise` 🆕

Checks if a value is a Promise.

```ts
import {isPromise} from 'is';

isPromise ( Promise.resolve () ); // => true
isPromise ( Promise.reject () ); // => true
isPromise ( { then: () => {} } ); // => false
```

#### `isPrototype` 🆕

Checks if a value is likely a prototype.

```ts
import {isPrototype} from 'is';

isPrototype ( Array.prototype ); // => true
isPrototype ( isPrototype ); // => false
```

#### `isRegExp`

Checks if a value is likely a regex.

```ts
import {isRegExp} from 'is';

isRegExp ( /x/ ); // => true
isRegExp ( new RegExp ( 'x' ) ); // => true
isRegExp ( 'x' ); // => false
```

#### `isSealed` 🆕

Checks if a value is sealed.

```ts
import {isSealed} from 'is';

isSealed ( Object.seal ( {} ) ); // => true
isSealed ( {} ); // => false
```

#### `isSafeInteger`

Checks if a value is an integer that can be represented faithfully in JavaScript.

```ts
import {isSafeInteger} from 'is';

isSafeInteger ( 0 ); // => true
isSafeInteger ( Number.MAX_SAFE_INTEGER ); // => true
isSafeInteger ( -Number.MAX_SAFE_INTEGER ); // => true
isSafeInteger ( Number.MAX_SAFE_INTEGER + 1 ); // => false
```

#### `isSet`

Checks if a value is a Set.

```ts
import {isSet} from 'is';

isSet ( new Set () ); // => true
isSet ( [] ); // => false
```

#### `isSharedArrayBuffer` 🆕

Checks if a value is a SharedArrayBuffer object.

```ts
import {isSharedArrayBuffer} from 'is';

isSharedArrayBuffer ( new SharedArrayBuffer ( 8 ) ); // => true
isSharedArrayBuffer ( [] ); // => false
```

#### `isString`

Checks if a value is a string.

```ts
import {isString} from 'is';

isString ( 'foo' ); // => true
isString ( ['f', 'o', 'o'] ); // => false
```

#### `isSymbol`

Checks if a value is a symbol.

```ts
import {isSymbol} from 'is';

isSymbol ( Symbol () ); // => true
isSymbol ( {} ); // => false
```

#### `isText` 🆕

Checks if a value is likely a DOM text.

```ts
import {isText} from 'is';

isText ( new Text ( 'foo' ) ); // => true
isText ( 'foo ); // => false
```

#### `isTruthy`

Checks if a value is truthy.

```ts
import {isTruthy} from 'is';

isTruthy ( [] ); // => true
isTruthy ( 0 ); // => false
isTruthy ( '' ); // => false
```

#### `isTypedArray`

Checks if a value is a TypedArray.

```ts
import {isTypedArray} from 'is';

isTypedArray ( new Int8Array ( 8 ) ); // => true
isTypedArray ( [] ); // => false
```

#### `isUint8Array` 🆕

Checks if a value is a Uint8Array.

```ts
import {isUint8Array} from 'is';

isUint8Array ( new Uint8Array () ); // => true
isUint8Array ( [] ); // => false
```

#### `isUint8ClampedArray` 🆕

Checks if a value is a Uint8ClampedArray.

```ts
import {isUint8ClampedArray} from 'is';

isUint8ClampedArray ( new Uint8ClampedArray () ); // => true
isUint8ClampedArray ( [] ); // => false
```

#### `isUint16Array` 🆕

Checks if a value is a Uint16Array.

```ts
import {isUint16Array} from 'is';

isUint16Array ( new Uint16Array () ); // => true
isUint16Array ( [] ); // => false
```

#### `isUint32Array` 🆕

Checks if a value is a Uint32Array.

```ts
import {isUint32Array} from 'is';

isUint32Array ( new Uint32Array () ); // => true
isUint32Array ( [] ); // => false
```

#### `isUndefined`

Checks if a value is undefined.

```ts
import {isUndefined} from 'is';

isUndefined ( undefined ); // => true
isUndefined ( null ); // => false
```

#### `isWeakMap`

Checks if a value is a WeakMap.

```ts
import {isWeakMap} from 'is';

isWeakMap ( new WeakMap () ); // => true
isWeakMap ( new Map () ); // => false
```

#### `isWeakRef` 🆕

Checks if a value is a WeakRef.

```ts
import {isWeakRef} from 'is';

isWeakRef ( new WeakRef ( WeakRef ) ); // => true
isWeakRef ( WeakRef ) ); // => false
```

#### `isWeakReferable` 🆕

Checks if a value can be held weakly, via WeakRef, WeakMap and WeakSet.

```ts
import {isWeakReferable} from 'is';

isWeakReferable ( {} ); // => true
isWeakReferable ( 123 ) ); // => false
```

#### `isWeakSet`

Checks if a value is a WeakSet.

```ts
import {isWeakSet} from 'is';

isWeakSet ( new WeakSet () ); // => true
isWeakSet ( new Set () ); // => false
```

#### `isWindow` 🆕

Checks if a value is the Window object.

```ts
import {isWindow} from 'is';

isWindow ( globalThis.window ); // => true, in a browser environment
isWindow ( {} ) ); // => false
```

## License

- Parts: MIT © Fabio Spampinato.
- Parts: MIT © [lodash](https://github.com/lodash/lodash).
