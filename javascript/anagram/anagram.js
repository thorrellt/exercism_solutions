//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

String.prototype.isSameLength = function (testWord){
  return this.length === testWord.length;
}

String.prototype.isSameWord = function (testWord){
  return this.toLowerCase() === testWord.toLowerCase();
}

String.prototype.collate = function (){
  return this.toLowerCase().split('').sort().join('');
}

String.prototype.isAnagramFor = function(testWord){
    if (!this.isSameLength(testWord)) return false;
    if (this.isSameWord(testWord)) return false;
    return this.collate() === testWord.collate();    
}

export const findAnagrams = (controlWord, wordList) => {
  const matchingWords = [];
  
  for (let i = 0; i < wordList.length; i++){
    if (wordList[i].isAnagramFor(controlWord)) {
      matchingWords.push(wordList[i]);
    }
  }
  return matchingWords;
};
