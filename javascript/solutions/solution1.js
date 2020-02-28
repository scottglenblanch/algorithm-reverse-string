const reverseString = str => {
  let newStr = ''
  for(let i =0; i < str.length; i ++) {
    const curChar = str.charAt(i);
    newStr = curChar + newStr;
  }

  return newStr;
}

module.exports = reverseString;
