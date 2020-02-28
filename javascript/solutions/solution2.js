const reverseString = str => {
  let newStr = ''
  for(let i = str.length - 1; i >= 0; i--) {
    const curChar = str.charAt(i);
    newStr = newStr + curChar;
  }

  return newStr;
}
