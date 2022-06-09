//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let sound = '';
  
  if(num % 3 === 0) sound = sound.concat('Pling');
  if(num % 5 === 0) sound = sound.concat('Plang');
  if(num % 7 === 0) sound = sound.concat('Plong');

  return sound === '' ? String(num) : sound;
};
