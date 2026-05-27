// DAY 05 — Week 1

// FONCTION 1

// Ex: compose(x => x+1, x => x*2)(3) => 7   (3*2=6, 6+1=7)
export function compose<T>(...fns: Array<(x: T) => T>): (x: T) => T {
  return (x: T): T => fns.reduceRight((acc, fn) => fn(acc), x);
}

/*
La fonction compose de type générique T reçoit plusieurs fonctions via le spread ...fns 
— chacune est une fonction fléchée qui reçoit un T et retourne un T. 
Elle retourne elle-même une fonction fléchée qui reçoit x de type T et retourne un T. 
Cette fonction retournée applique .reduceRight() sur fns dont acc est l'accumulateur, 
fn l'élément courant et x la valeur initiale 
— ce qui exécute les fonctions de droite à gauche.
*/

//EN

/*


The function compose with generic type T receives multiple functions via the spread 
operator ...fns — each one is an arrow function that receives a T and returns a T. 
It returns itself an arrow function that receives x of type T and returns a T. 
This returned function applies .reduceRight() on fns where acc is the accumulator, 
fn the current element and x the initial value 
which executes the functions from right to left.


*/

// FONCTION 2
// Ex: chunk([1,2,3,4,5], 2) => [[1,2],[3,4],[5]]
export function chunk<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];

  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
}

/*
La fonction chunk de type générique T reçoit un tableau arr de type T et un number size. 
Elle retourne un tableau de tableaux de type T. On crée res, un tableau vide de type T[][]. 
On initialise i à 0 et tant que i est inférieur à la longueur de arr, 
on avance i de size à chaque itération. À chaque tour on pousse 
dans res une tranche du tableau découpée avec .slice(i, i + size). 
On retourne res en dehors de la boucle.

*/

//EN

/* 
The function chunk with generic type T receives an array arr of type T and a number size. 
It returns an array of arrays of type T. We create res, an empty array of type T[][]. 
We initialize i to 0 and as long as i is less than the length of arr, 
we advance i by size at each iteration. 
At each turn we push into res a slice of the array cut with .slice(i, i + size). 
We return res outside the loop.

*/
