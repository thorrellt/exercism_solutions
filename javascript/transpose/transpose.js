//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (words) => {
  if(words.length === 0) return words;
  
  const itemCount = words.length;
  let maxLength = 0;

  words.forEach(word => word.length > maxLength ? maxLength = word.length : false);

  let retArr = []
  for (let i = 0; i< maxLength; i++){   
    for(let k = 0; k < itemCount; k++){
      const nextVal = words[k][i] ? words[k][i] : ` `;
      retArr[i] ? retArr[i] += nextVal: retArr[i] = nextVal;
    }
  }
  retArr[retArr.length-1]=retArr[retArr.length-1].trimEnd();
  return retArr;  
};
