//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (testStr) => {
  const returnSet = new Set();
  for(let i = 0; i < testStr.length; i++){
    
    if (testStr[i].toLowerCase() >= 'a' && testStr[i].toLowerCase() <= 'z'){
      returnSet.add(testStr[i].toLowerCase());
      console.log('added: ' + testStr[i]);
    }
  }
  console.log('returnSet: ' + returnSet.values().toString());
  console.log('returnSet Length: ' + returnSet.size);
  return returnSet.size === 26;
};
