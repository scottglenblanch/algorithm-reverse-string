const reverseString = str => {
  let newStr = ''
  for(let i =0; i < str.length; i ++) {
    const curChar = str.charAt(str.length - 1 - i);
    newStr = newStr + curChar;
  }

  return newStr;
}

module.exports = reverseString;
