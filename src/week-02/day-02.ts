/*

sumByKey
Écris une fonction générique qui prend un tableau d'objets et une clé de type number, 
et retourne la somme de toutes les valeurs de cette clé.
Entrée : [{name: "Alice", age: 25}, {name: "Bob", age: 30}], "age"
Sortie : 55

04 — reverseWords
Écris une fonction qui prend une string et retourne la même phrase avec les mots dans l'ordre inversé.
Entrée : "hello world typescript"
Sortie : "typescript world hello"


*/

//-----------01------------

/**
 * Input: an array of objects of type T and a key that must be a property of T of type number
 * Output: a number
 * By hand: go through each object, get the value of the key, and add them all up
 */

export function sumBykey<T>(arr: T[], key: keyof T): number {
  return arr.reduce((acc, n) => acc + (n[key] as number), 0);
}

/*
The function sumByKey with generic type T receives an array 
arr of type T and a key that must be an existing property of T. 
It returns a number. It directly returns the result of .reduce() 
where acc is the accumulator, n is the current element and 0 is 
the initial value. At each iteration we add the value of key 
on n cast as number to acc.
*/

//----------02-------------------

/**
 * Input: a string
 * Output: a string
 * By hand: split the sentence into words, reverse the order, join them back into a sentence
 */

export function reverseWords(str: string): string {
  return str.split(" ").reverse().join(" ");
}

/*
The function reverseWords receives a string str and returns a string. 
It directly chains three methods .split(" ") splits the sentence 
into an array of words, .reverse() reverses the order of the array, 
and .join(" ") joins the words back into a single string separated 
by spaces.

*/
