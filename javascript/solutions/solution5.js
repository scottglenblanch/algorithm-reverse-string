const reverseString = str => str
    .split('')
    .reduce(
      (newStr, curChar) => curChar + newStr,
      ''
    );
