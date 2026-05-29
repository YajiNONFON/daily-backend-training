//----------01-------------------

/**
 * Input: an array of type T and a predicate function that receives a T and returns a boolean
 * Output: a tuple of two arrays of type T
 * By hand: go through each element, if it satisfies the predicate push it into the first array
 otherwise push it into the second
 */

export function partition<T>(
  arr: T[],
  predicate: (n: T) => boolean,
): [T[], T[]] {
  const valid: T[] = [];
  const invalid: T[] = [];

  for (const x of arr) {
    if (predicate(x)) {
      valid.push(x);
    } else {
      invalid.push(x);
    }
  }

  return [valid, invalid];
}

/*
The function partition with generic type T receives an array arr of type 
T and a predicate function that receives a T and returns a boolean. It returns 
a tuple of two arrays of type T. We create two empty arrays valid and invalid of type T. 
For each element x of arr, if predicate(x) returns true we push x into valid, otherwise 
we push it into invalid. We return the tuple [valid, invalid] outside the loop.

*/

//----------02-------------------

/**
 * Input: two arrays of respective types T and U
 * Output: an array of tuples [T, U]
 * By hand: find the minimum length of the two arrays, 
 go through each index and pair the 
element of the first array with the element of the 
second array at the same index

 
 */

export function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  const arrLength = Math.min(arr1.length, arr2.length);
  const res: [T, U][] = [];

  for (let i = 0; i < arrLength; i++) {
    res.push([arr1[i], arr2[i]]);
  }

  return res;
}

/**
 The function zip with generic types T and U receives two arrays arr1 of type T 
 and arr2 of type U. It returns an array of tuples [T, U]. We store the minimum 
 length of both arrays in arrLength using Math.min(). We create an empty array 
 res of type [T, U][]. We initialize i to 0 and as long as i is less than arrLength
  we advance i by 1 at each iteration. At each turn we push a tuple [arr1[i], arr2[i]] 
  into res. We return res outside the loop.


 */
