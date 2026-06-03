/**
 * Input: an array of number
 * Output: a number
 * By hand: filter out the negative numbers, then sum what's left
 */

export function sumPositives(arr: number[]): number {
  const filterArr = arr.filter((n) => n > 0);
  return filterArr.reduce((acc, n) => acc + n, 0);
}

/**
 The function sumPositives receives an array arr of type 
 number and returns a number. We store the positive numbers 
 in filterArr using .filter() which keeps only elements where 
 n > 0. We return the result of .reduce() on filterArr where 
 acc is the accumulator, n is the current element and 0 is the 
 initial value. At each iteration we add n to acc.

 */

/**
  * Input: an array of String 
  * Output: a string
  * By hand: go through each word, compare its length to the 
  longest found so far, keep the longer one
  */

export function longestWord(arr: string[]): string {
  if (arr.length === 0) return "";
  return arr.reduce((acc, n) => (n.length > acc.length ? n : acc), arr[0]);
}

/*

The function longestWord receives an array arr of type string and returns 
a string. If the array is empty we return an empty string. Otherwise we return 
the result of .reduce() where acc is the accumulator, n is the current element 
and arr[0] is the initial value. At each iteration we compare n.length with 
acc.length if n is longer it becomes the new acc, otherwise we keep acc.


*/
