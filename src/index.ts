
/* MAIN */

import {types} from 'node:util';
import isArguments from './is_arguments';
import isArray from './is_array';
import isArrayLike from './is_array_like';
import isArrayLikeObject from './is_array_like_object';
import isArrowFunction from './is_arrow_function';
import isAsyncGeneratorFunction from './is_async_generator_function';
import isAsyncIterable from './is_async_iterable';
import isAttribute from './is_attribute';
import isBigInt from './is_bigint';
import isBlob from './is_blob';
import isBoolean from './is_boolean';
import isBoundFunction from './is_bound_function';
import isBoxedBigInt from './is_boxed_bigint';
import isBoxedBoolean from './is_boxed_boolean';
import isBoxedNumber from './is_boxed_number';
import isBoxedString from './is_boxed_string';
import isBoxedSymbol from './is_boxed_symbol';
import isBuffer from './is_buffer';
import isClass from './is_class';
import isComment from './is_comment';
import isDefined from './is_defined';
import isDocument from './is_document';
import isDocumentFragment from './is_document_fragment';
import isDocumentType from './is_document_type';
import isElement from './is_element';
import isEmpty from './is_empty';
import isError from './is_error';
import isEven from './is_even';
import isFalsy from './is_falsy';
import isFinite from './is_finite';
import isFloat from './is_float';
import isFrozen from './is_frozen';
import isFunction from './is_function';
import isInteger from './is_integer';
import isIterable from './is_iterable';
import isLength from './is_length';
import isNaN from './is_nan';
import isNative from './is_native';
import isNegativeZero from './is_negative_zero';
import isNil from './is_nil';
import isNode from './is_node';
import isNull from './is_null';
import isNumber from './is_number';
import isNumberLike from './is_number_like';
import isObject from './is_object';
import isObjectLike from './is_object_like';
import isOdd from './is_odd';
import isPlainObject from './is_plain_object';
import isPrimitive from './is_primitive';
import isPrototype from './is_prototype';
import isSealed from './is_sealed';
import isSafeInteger from './is_safe_integer';
import isString from './is_string';
import isSymbol from './is_symbol';
import isText from './is_text';
import isTruthy from './is_truthy';
import isUndefined from './is_undefined';
import isWeakRef from './is_weak_ref';
import isWeakReferable from './is_weak_referable';
import isWindow from './is_window';

/* EXPORT */

export {
  ...types,
  isArguments,
  isArray,
  isArrayLike,
  isArrayLikeObject,
  isArrowFunction,
  isAsyncGeneratorFunction,
  isAsyncIterable,
  isAttribute,
  isBigInt,
  isBlob,
  isBoolean,
  isBoundFunction,
  isBoxedBigInt,
  isBoxedBoolean,
  isBoxedNumber,
  isBoxedString,
  isBoxedSymbol,
  isBuffer,
  isClass,
  isComment,
  isDefined,
  isDocument,
  isDocumentFragment,
  isDocumentType,
  isElement,
  isEmpty,
  isError,
  isEven,
  isFalsy,
  isFinite,
  isFloat,
  isFrozen,
  isFunction,
  isInteger,
  isIterable,
  isLength,
  isNaN,
  isNative,
  isNegativeZero,
  isNil,
  isNode,
  isNull,
  isNumber,
  isNumberLike,
  isObject,
  isObjectLike,
  isOdd,
  isPlainObject,
  isPrimitive,
  isPrototype,
  isSealed,
  isSafeInteger,
  isString,
  isSymbol,
  isText,
  isTruthy,
  isUndefined,
  isWeakRef,
  isWeakReferable,
  isWindow
};
