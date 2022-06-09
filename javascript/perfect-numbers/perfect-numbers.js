//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {
    
  if (num <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  function isFactor(testNum) {
    return num % testNum === 0;
  }
  
  let factorTotal = 0; 
  for(let testNum = 0; testNum <= num / 2; testNum++) {
    isFactor(testNum) ? factorTotal += testNum : false; 
  }
  
  let numDifference = factorTotal - num;
  switch(true){
    case (numDifference > 0): return "abundant";
    case (numDifference === 0): return "perfect";
    case (numDifference < 0): return "deficient";
  }  
};
