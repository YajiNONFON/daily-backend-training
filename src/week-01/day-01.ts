// ============================================================
// DAY 01 — Week 1
// Challenge: écris les deux fonctions ci-dessous SANS l'aide de l'IA
// Temps cible : 30 min max par fonction
// ============================================================

// FONCTION 1
// Calcule la somme de tous les nombres dans un tableau
// Ex: sumArray([1, 2, 3, 4]) => 10
// Ex: sumArray([]) => 0
export function sumArray(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

/*
La fonction sumArray reçoit un tableau numbers de type number et retourne un number. 
Elle retourne directement le résultat de .reduce() dont a est l'accumulateur, 
b l'élément courant, et 0 la valeur initiale de l'accumulateur. 
À chaque itération on additionne a + b. 
*/

//EN

/*
The function sumArray receives an array numbers of type number and returns a number. 
It directly returns the result of .reduce() where a is the accumulator, b the current 
element, and 0 the initial value of the accumulator. At each iteration we add a + b.

*/

// FONCTION 2
// Calcule la factorielle d'un nombre
// Ex: factorial(5) => 120  (5 * 4 * 3 * 2 * 1)
// Ex: factorial(0) => 1
// Ex: factorial(1) => 1
export function factorial(n: number): number {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

/* La fonction factorial reçoit un number n et retourne un number. 
C'est une fonction récursive — elle s'appelle elle-même. 
Si n est inférieur ou égal à 1 on retourne 1, c'est le cas de base qui arrête la récursion. 
Sinon on retourne n multiplié par factorial(n - 1), ce qui relance la fonction 
avec n décrémenté de 1 jusqu'à atteindre le cas de base.
*/

//EN

/*
The function factorial receives a number n and returns a number. 
It is a recursive function — it calls itself. If n is less 
than or equal to 1 we return 1, this is the base case that stops the recursion. 
Otherwise we return n multiplied by factorial(n - 1), 
which re-calls the function with n decremented by 1 
until the base case is reached.
*/
