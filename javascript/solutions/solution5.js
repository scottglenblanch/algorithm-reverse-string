const reverseString = str => str
    .split('')
    .reduce(
      (newStr, curChar) => curChar + newStr,
      ''
    );

module.exports = reverseString;
