//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  let acronym = '';
  let isFirstLetter = true;

  function isLetter(char) {
    const letter = char.toLowerCase();
    if (letter >= 'a' && letter <= 'z' ) return true;
    if (letter === `'` ) return true;
    return false;
  }

  for (let i = 0; i < phrase.length; i++){
    if (isLetter(phrase[i]) && isFirstLetter) {
      acronym += phrase[i].toUpperCase();
      isFirstLetter = false;
    }
    
    if (!isLetter(phrase[i])) {
      
      isFirstLetter = true;
    }
  }

  return acronym;
  
  
};
