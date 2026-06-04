/**
 * Input: An array of number
 * Output: A number
 * By hand: sum all elements, then divide by the total count
 */

export function average(arr: number[]): number {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, n) => acc + n, 0);
  return sum / arr.length;
}

/*
The function average receives an array arr of type number and returns a number.
If the array is empty we return 0 immediately. Otherwise we sum all elements with
.reduce() where acc is the accumulator, n is the current element and 0 is the initial
 value, storing the result in sum. We return sum divided by arr.length.



*/

/**
 * Input:  an array of unknown
 * Output: A number
 * By hand: filter out all falsy values, then return the length of what's left
 */

export function countTruthy(arr: unknown[]): number {
  return arr.filter(Boolean).length;
}

/*
The function countTruthy receives an array arr of type unknown and returns a number. 
It returns the length of the result of .filter(Boolean) passing Boolean as the 
predicate keeps only truthy values, meaning any value that is not false, 0, empty 
string, null, undefined or NaN.

*/
