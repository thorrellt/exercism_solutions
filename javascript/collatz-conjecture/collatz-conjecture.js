//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {
  let count = 0;
  if (num <= 0){throw new Error('Only positive numbers are allowed');}
  while (num != 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num += 2 * num + 1;
    }
    count++;
  }
  return count;
};
