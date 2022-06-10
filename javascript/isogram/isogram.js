//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (testWord) => {
  
  //empty strings are considered an isogram
  if (testWord === '') return true;

  let result = true;

  //convert string to ordered array of only letters.
  const wordArr = testWord.toLowerCase()
                    .split('')
                    .sort()
                    .filter(char => (char >= 'a' && char <= 'z'));

  //compare neighboring letters for duplicates
  wordArr.forEach((element, index) => {
    if (element === wordArr[index + 1]) result = false;
  });
  
  return result;
};
