// ============================================================
// DAY 02 — Week 1
// ============================================================

// FONCTION 1
// Filtre les éléments d'un tableau selon un prédicat
// Ex: filterArray([1,2,3,4,5], n => n % 2 === 0) => [2, 4]
export function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

/*
La fonction filterArray de type générique T reçoit un tableau arr de type T 
et une fonction predicate qui reçoit un item de type T et retourne un boolean. 
Elle retourne un tableau de type T. Elle retourne directement .filter(predicate) 
pour chaque élément, si predicate retourne true l'élément est gardé, sinon il est éliminé.
*/

//EN

/*

The function filterArray with generic type T receives an array arr of type T and a function 
predicate that receives an item of type T and returns a boolean. It returns an array of type T. 
It directly returns .filter(predicate) — for each element, if predicate returns true the element 
is kept, otherwise it is removed.



*/

// FONCTION 2
// Trouve le max et le min d'un tableau en un seul parcours
// Ex: minMax([3, 1, 4, 1, 5, 9]) => { min: 1, max: 9 }
export function minMax(numbers: number[]): { min: number; max: number } {
  return numbers.reduce(
    (acc, n) => ({
      min: n < acc.min ? n : acc.min,
      max: n > acc.max ? n : acc.max,
    }),
    { min: numbers[0], max: numbers[0] },
  );
}
/*
La fonction minMax reçoit un tableau numbers de type number et retourne 
un objet contenant min et max de type number. 
Elle retourne directement .reduce() dont acc est l'accumulateur et n l'élément courant. 
La valeur initiale est { min: numbers[0], max: numbers[0] } — le premier élément du tableau. 
À chaque itération, si n est inférieur à acc.min alors n devient le nouveau min, 
sinon on garde acc.min. Si n est supérieur à acc.max alors n devient le nouveau max, 
sinon on garde acc.max.

*/

//EN

/* 

The function minMax receives an array numbers of type number and returns an object 
containing min and max of type number. It directly returns .reduce() where acc is 
the accumulator and n the current element. The initial 
value is { min: numbers[0], max: numbers[0] } — the first element of the array. 
At each iteration, if n is less than acc.min then n becomes the new min, otherwise we keep acc.min. 
If n is greater than acc.max then n becomes the new max, otherwise we keep acc.max.

*/
