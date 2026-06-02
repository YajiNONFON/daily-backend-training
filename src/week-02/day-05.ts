/*
09 — intersect
Écris une fonction générique qui prend deux tableaux et retourne un tableau contenant 
uniquement les éléments présents dans les deux tableaux.
Entrée : [1, 2, 3, 4], [2, 4, 6]
Sortie : [2, 4]

10 — pipe
Écris une fonction générique qui prend plusieurs fonctions et une valeur initiale, 
et applique les fonctions de gauche à droite sur cette valeur.
Entrée : addOne, double — valeur : 3
Sortie : 8  (addOne(3) = 4 → double(4) = 8)


*/

/**
 * Input: two arrays of type T
 * Output: an array of type T
 * By Hand: go through the first array and keep only elements that exist in the second array
 */

export function intersect<T>(a: T[], b: T[]): T[] {
  const setB = new Set(b);
  return a.filter((x) => setB.has(x));
}

/*
 The function intersect with generic type T receives two arrays 
 a and b of type T and returns an array of type T. We convert b 
 into a Set stored in setB for efficient lookup. We return the 
 result of .filter() on a which keeps only elements x that are 
 present in setB using .has().

 */

/**
 * Input: an initial value of type T and multiple functions via spread ...fns
 * Output: a value of type T
 * By hand: apply each function one by one from left to right, passing the result of one as the input of the next
 */

export function pipe<T>(value: T, ...fns: ((arg: T) => T)[]): T {
  return fns.reduce((acc, fn) => fn(acc), value);
}

/*
The function pipe with generic type T receives an initial value of type T
and multiple functions via the spread operator ...fns each one is an arrow 
function that receives a T and returns a T. It returns the result of .reduce()
 on fns where acc is the accumulator, fn is the current function and value is 
the initial value which executes each function from left to right, passing 
the result of one into the next.

 
 */
