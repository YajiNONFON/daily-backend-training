/**
 * Input: an array of string
 * Output:  an array of string
 * By hand: split each string into individual characters, then flatten all results into one array
 */

export function flatMap(arr: string[]): string[] {
  return arr.flatMap((n) => n.split(""));
}

/*
The function flatMap receives an array arr of type string and returns an array of string. 
It directly returns the result of .flatMap() which receives n as the current element and 
splits it into individual characters with .split("") — the result is automatically flattened 
into a single array.


*/

/**
 * Input: an array of objects of type T and a key K constrained to the keys of T
 * Output: an array of the values at that key
 * By hand: go through each object and extract the value at the chosen key
 */

export function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map((n) => n[key]);
}

/*
The function pluck with generic types T and K where K is constrained to keyof T 
receives an array arr of type T and a key of type K. It returns an array of type 
T[K] — the type of the value at that key. It directly returns the result of .map() 
which receives n as the current element and extracts the value at key on each iteration.

*/
