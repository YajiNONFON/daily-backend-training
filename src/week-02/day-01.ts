//-----------01------------

/**
 * Input: an array of number
 * Output: a new array of number
 * By hand: go through each element and multiply it by 2
 */

export function double(arr: number[]): number[] {
  return arr.map((n) => n * 2);
}

/*

The function double receives an array arr of type number 
and returns an array of type number. It directly returns 
the result of .map() which receives n as the current element 
and multiplies it by 2 at each iteration.

*/
//-----------02------------

/**
 * Input: an array of string
 * Output: a new array of string
 * By hand: go through each word, take the first character 
 and uppercase it, then add the rest of the word
 */

export function capitalize(wordsArray: string[]): string[] {
  return wordsArray.map((n) => n[0].toUpperCase() + n.slice(1));
}

/**
 The function capitalize receives an array arr of type string 
 and returns an array of type string. It directly returns the 
 result of .map() which receives n as the current element. 
 For each element, it takes the first character n[0], 
 converts it to uppercase with .toUpperCase(), 
 then concatenates the rest of the word starting from 
 index 1 with .slice(1).
 */
