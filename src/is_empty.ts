
/* IMPORT */

import isArguments from './is_arguments';
import isArray from './is_array';
import isArrayLike from './is_array_like';
import isBuffer from './is_buffer';
import isFunction from './is_function';
import isMap from './is_map';
import isObject from './is_object';
import isPrototype from './is_prototype';
import isSet from './is_set';
import isString from './is_string';
import isTypedArray from './is_typed_array';

/* HELPERS */

const {hasOwnProperty} = Object;

/* MAIN */

const isEmpty = ( value: unknown ): boolean => {

  if ( isArrayLike ( value ) && ( isArray ( value ) || isString ( value ) || isFunction ( value['splice'] ) || isBuffer ( value ) || isTypedArray ( value ) || isArguments ( value ) ) ) {

    return !value.length;

  }

  if ( isMap ( value ) || isSet ( value ) ) {

    return !value.size;

  }

  if ( isObject ( value ) ) {

    const isProto = isPrototype ( value );

    for ( const key in value ) {

      if ( hasOwnProperty.call ( value, key ) && ( !isProto || key !== 'constructor' ) ) {

        return false;

      }

    }

  }

  return true;

};

/* EXPORT */

export default isEmpty;
