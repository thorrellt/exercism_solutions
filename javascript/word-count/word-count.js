//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {  
  let count = {};
  
  const words = phrase.toLowerCase()
    .match(/\w+('\w+)?/g)
    .forEach(word => {
    !count[word] ? count[word] = 1: count[word]++;
    }
  );
  
 return count;
  
};
