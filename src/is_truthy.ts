
/* MAIN */

const isTruthy = <T> ( value: T ): value is Extract<T, number | bigint | string | true | object | symbol | Function> => {

  return !!value;

};

/* EXPORT */

export default isTruthy;
