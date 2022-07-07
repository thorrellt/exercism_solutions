//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const numToLetter = ['a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
                'j',
                'k',
                'l',
                'm',
                'n',
                'o',
                'p',
                'q',
                'r',
                's',
                't',
                'u',
                'v',
                'w',
                'x',
                'y',
                'z',];
const letterToNum = {
  a : 0,
  b : 1,
  c : 2,
  d : 3,
  e : 4,
  f : 5,
  g : 6,
  h : 7,
  i : 8,
  j : 9,
  k : 10,
  l : 11,
  m : 12,
  n : 13,
  o : 14,
  p : 15,
  q : 16,
  r : 17,
  s : 18,
  t : 19,
  u : 20,
  v : 21,
  w : 22,
  x : 23,
  y : 24,
  z : 25,
};
String.prototype.isLetter = function (num){
  return this[0].toLowerCase() >= 'a' && this[0].toLowerCase() <= 'z';
}
String.prototype.rotateBy = function (num){
  if(!this[0].isLetter()) return this[0];
  const isCapital = this[0] >= 'A' && this[0] <= 'Z';
  const newPosition = (letterToNum[this[0].toLowerCase()] + num) % 26;
  return isCapital ? numToLetter[newPosition].toUpperCase() : numToLetter[newPosition];
}

export const rotate = (phrase, num) => {
  let retPhrase = '';
  
  for(let i = 0; i < phrase.length; i++){
    retPhrase += phrase[i].rotateBy(num);
  }
  return retPhrase;
};
