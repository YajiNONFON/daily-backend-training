/**
 * input: an array of type T
 * Output: an array of type T containing only values that appear more than once
 * By hand: go throught the array, if an element appears more than once and is not already in the result array, push it
 */

export function findDuplicates<T>(arr: T[]): T[] {
  const newArr: T[] = [];

  for (const x of arr) {
    if (arr.indexOf(x) !== arr.lastIndexOf(x) && !newArr.includes(x)) {
      newArr.push(x);
    }
  }

  return newArr;
}

//const arr = [1, 2, 3, 2, 4, 3, 5];
const arr = [1];

console.log(findDuplicates(arr));

/* 
The function findDuplicates with generic type T receives 
an array arr of type T and returns an array of type T. 
We create an empty array newArr of type T. For each 
element x of arr, if the first index of x is different
from its last index with indexOf and lastIndexOf meaning
it appears more than once and x is not already in newArr,
we push x into newArr. We return newArr outside the loop.
*/

/**
 * Input: a deeply nested array
 * Output: a fully flattened array
 * By hand: flatten all levels of nesting into a single array
 */

export function deepFlatten(arr: unknown[]): unknown[] {
  return arr.flat(Infinity);
}

//const arr1 = [1, [2, [3, [4]], 5]];
const arr1 = [1];

console.log(deepFlatten(arr1));

/* 
The function deepFlatten receives a nested array arr of type
 unknown[] and returns a flattened array of type unknown[]. 
 It directly returns the result of .flat(Infinity) which flattens 
 all levels of nesting into a single array regardless of how deep 
 the nesting is.
*/
