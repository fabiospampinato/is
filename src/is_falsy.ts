
/* MAIN */

const isFalsy = <T> ( value: T ): value is Extract<T, 0 | -0 | 0n | -0n | '' | false | null | undefined | void> => {

  return !value;

};

/* EXPORT */

export default isFalsy;
