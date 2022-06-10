//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
String.prototype.isPunctuation = function(){
  console.log('testing ' + this)
  if (this === '-') return false;
  if (this === ' ') return false;
  if (this === '.') return false;
  if (this === '+') return false;
  if (this === `(`) return false;
  if (this === `)`) return false;
  if (this >= '0' && this <= '9') return false;
  console.log(this + ' is Punctuation')
  return true;
}
String.prototype.isLetter = function() {
  return (this.toLowerCase() >= 'a' && this.toLowerCase() <= 'z');
}
String.prototype.isNumber = function() {return (this >= '0' && this <= '9')}
String.prototype.isTooShort = function() {return this.length < 10}

export const clean = (phoneNum) => {
  if (phoneNum.isTooShort()) {throw Error('Incorrect number of digits');}

  //convert string to array 
  let numArr = phoneNum.split('');

  //Error check for non-numbers and permitted punctuation.
  numArr.forEach(char => {
    if (char.isLetter()) throw Error('Letters not permitted');
    if (char.isPunctuation()) throw Error('Punctuations not permitted');
  });

  //filter out all non-numbers
  let filteredNum = numArr.filter(digit => digit.isNumber());

  //more of the gazillion error checks
  if (filteredNum.length > 11) {throw Error('More than 11 digits');}
  if (filteredNum[0] !== '1' && filteredNum.length > 10) {throw Error('11 digits must start with 1');}

  //chop off US country code
  if (filteredNum.length === 11) filteredNum.splice(0,1);

  //what do you know, more errors to throw...my shoulder hurts
  if (filteredNum[0] === '0') throw Error('Area code cannot start with zero');
  if (filteredNum[0] === '1') throw Error('Area code cannot start with one');
  if (filteredNum[3] === '0') throw Error('Exchange code cannot start with zero');
  if (filteredNum[3] === '1') throw Error('Exchange code cannot start with one');

  //finally..no mare errors...convert array back to string
  return filteredNum.join('');
};
