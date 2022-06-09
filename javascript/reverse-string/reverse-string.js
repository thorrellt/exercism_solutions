//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (inputStr) => {
  let retStr = '';
  for (let i = inputStr.length -1; i >= 0; i--){
    retStr += (inputStr[i]);
  }
  return retStr;
}