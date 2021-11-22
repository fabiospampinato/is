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

#### `isBigInt` 🆕

Checks if a value is a BigInt.

```ts
import {isBigInt} from 'is';

isBigInt ( 0n ); // => true
isBigInt ( 0 ); // => false
```

#### `isBoolean`

Checks if a value is a boolean.

```ts
import {isBoolean} from 'is';

isBoolean ( true ); // => true
isBoolean ( false ); // => true
isBoolean ( 0 ); // => false;
```

#### `isBuffer`

Checks if a value is a Buffer.

```ts
import {isBuffer} from 'is';

isBuffer ( Buffer.from ( '' ) ); // => true
isBuffer ( [] ); // => false
```

#### `isDate`

Checks if a value is a Date.

```ts
import {isDate} from 'is';

isDate ( new Date () ); // => true
isDate ( 0 ); // => false
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

#### `isFunction`

Checks if a value is a function.

```ts
import {isFunction} from 'is';

isFunction ( isFunction ); // => true
isFunction ( { call: () => {} } ); // => false
```

#### `isInteger`

Checks if a value is an integer.

```ts
import {isInteger} from 'is';

isInteger ( 0 ); // => true
isInteger ( -1 ); // => true
isInteger ( 1.2 ); // => false
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

#### `isNil`

Checks if a value is null or undefined.

```ts
import {isNil} from 'is';

isNil ( null ); // => true
isNil ( undefined ); // => true
isNil ( {} ); // => false
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

#### `isWeakSet`

Checks if a value is a WeakSet.

```ts
import {isWeakSet} from 'is';

isWeakSet ( new WeakSet () ); // => true
isWeakSet ( new Set () ); // => false
```

## License

- Parts: MIT © Fabio Spampinato.
- Parts: MIT © [lodash](https://github.com/lodash/lodash).
