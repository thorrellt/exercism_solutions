// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const revValue = String(value).split('').reverse().join('');
  return String(value) === revValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  console.log('Boolean(Number(${input})) = ' + Boolean(Number(input)));
  console.log('Number(${input}) = ' + Number(input));

  if (input === null ||
      input === undefined ||
      input === ''){
    return 'Required field';
      }

  if (Boolean(Number(input))) {
    return '';
  }

  return 'Must be a number besides 0';
}
